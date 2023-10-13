const express = require('express');
const router = express.Router();
const mysql = require('../sql');

router.get('/list', (req, res) => {
    const query = 'SELECT * from appuntamento';
    mysql.query(query, (error, results) => {
        if (error) {
            throw error;
        }
        res.json(results);
    });

    mysql.end((err) => {
        if (err) {
            console.error('Errore nella chiusura della connessione:', err);
        } else {
            console.log('Connessione al database chiusa con successo.');
        }
    });
})

router.post('/', (req, res) => {
    //connection.connect();
    // Leggi i dati inviati dal form
    const { nome, cognome, email, telefono, password } = req.body;
    const query = 'INSERT INTO Utente (nome, cognome, email, tel, pw) VALUES (?,?,?,?,?);';

    mysql.query(query, [nome, cognome, email, telefono, password], (error, results) => {
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

    res.redirect(req.originalUrl.split("prenota")[0] + "?bookingStatus=success");
});

module.exports = router;