const express = require('express');
const router = express.Router();
const mysql = require('../sql');
const bcrypt = require('bcrypt');

<<<<<<< HEAD
function fixUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

router.post('/', async (req, res) => {
=======
router.post('/', async (req, res) => {
    //connection.connect();
    // Leggi i dati inviati dal form
>>>>>>> 6eb2fb79ea43107387b2ea3bda9247675750d93c
    const { nome, cognome, email, telefono, password, passwordConferma } = req.body;

    // Verifico se la password e la conferma della password corrispondono
    if (password !== passwordConferma) {
        return res.status(400).send('La password e la conferma della password non corrispondono.');
<<<<<<< HEAD
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
=======
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
>>>>>>> 6eb2fb79ea43107387b2ea3bda9247675750d93c
