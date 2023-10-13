const express = require('express');
const router = express.Router();
const mysql = require('../sql');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    //connection.connect();
    // Leggi i dati inviati dal form
    const { nome, cognome, email, telefono, password, passwordConferma } = req.body;

    // Verifico se la password e la conferma della password corrispondono
    if (password !== passwordConferma) {
        return res.status(400).send('La password e la conferma della password non corrispondono.');
        res.redirect(req.originalUrl.split("signIn")[0] + "?bookingStatus=success");
    }

    try {
        // Genera un salt (un valore casuale) per la crittografia
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Ora puoi salvare hashedPassword nel tuo database al posto della password in chiaro

        // Esegui qui la logica per salvare l'utente nel tuo database
        const query = 'INSERT INTO Utente (nome, cognome, email, tel, pw) VALUES (?,?,?,?,?);';

        mysql.query(query, [nome, cognome, email, telefono, hashedPassword], (error, results) => {
            if (error) {
                throw error;
            }
            console.log('Dati inseriti con successo:', results);
        });

        mysql.end((err) => {
            if (err) {
                console.error('Errore nella chiusura della connessione:', err);
            } else {
                console.log('Connessione al database chiusa con successo.');
            }
        });

        res.send('Registrazione avvenuta con successo!');
    } catch (error) {
        console.error('Errore durante la crittografia della password:', error);
        res.status(500).send('Si è verificato un errore durante la registrazione.');
    }

    
});

module.exports = router;
