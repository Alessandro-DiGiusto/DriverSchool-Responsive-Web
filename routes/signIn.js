const express = require('express');
const router = express.Router();
const mysql = require('../sql');
const bcrypt = require('bcrypt');

function fixUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

router.post('/', async (req, res) => {
    const { nome, cognome, email, telefono, password, passwordConferma } = req.body;

    // Verifico se la password e la conferma della password corrispondono
    if (password !== passwordConferma) {
        return res.status(400).send('La password e la conferma della password non corrispondono.');
    }

    // Query per cercare un utente con lo stesso indirizzo email
    const emailCheckQuery = 'SELECT * FROM Utente WHERE email = ?';

    mysql.query(emailCheckQuery, [email], (error, results) => {
        if (error) {
            console.error('Errore nella query di verifica email:', error);
            return res.status(500).send('Si è verificato un errore durante la registrazione.');
        }

        if (results.length > 0) {
            return res.status(400).send('Un utente con questa email è già registrato.');
        }

        // Se non esiste un utente con la stessa email, procedi con l'inserimento
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async (hashError, hashedPassword) => {
            if (hashError) {
                console.error('Errore durante la crittografia della password:', hashError);
                return res.status(500).send('Si è verificato un errore durante la registrazione.');
            }

            const nameFixed = fixUpperCase(nome);
            const cognomeFixed = fixUpperCase(cognome);

            const insertQuery = 'INSERT INTO Utente (nome, cognome, email, tel, pw) VALUES (?,?,?,?,?);';

            mysql.query(insertQuery, [nameFixed, cognomeFixed, email, telefono, hashedPassword], (insertError, insertResults) => {
                if (insertError) {
                    console.error('Errore durante l\'inserimento dei dati:', insertError);
                    return res.status(500).send('Si è verificato un errore durante la registrazione.');
                }
                console.log('Dati inseriti con successo:', insertResults);
                res.redirect('/welcome.html');
            });
        });
    });
});

module.exports = router;