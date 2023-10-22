const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('../sql');
const router = express.Router();

router.post('/', async (req, res) => {
    // Leggi i dati inviati dal modulo di accesso (email e password)
    const { email, password } = req.body;

    // Esegui la query per ottenere i dati dell'utente dal database
    const query = 'SELECT * FROM Utente WHERE email = ?';

    mysql.query(query, [email], async (error, results) => {
        if (error) {
            throw error;
        }

        if (results.length === 1) {
            // Utente trovato
            const user = results[0];
            // Confronta la password con quella nel database utilizzando bcrypt
            const passwordMatch = await bcrypt.compare(password, user.pw);

            if (passwordMatch) {
                // Password corretta, reindirizza l'utente a '/login.html'
                res.redirect('/login.html');
            } else {
                // Password errata, reindirizza l'utente a '/index.html' con un messaggio di errore
                res.redirect('/index.html?loginError=PasswordErrata');
            }
        } else {
            // Email non trovata, reindirizza l'utente a '/index.html' con un messaggio di errore
            res.redirect('/index.html?loginError=EmailNonTrovata');
        }
    });
});

module.exports = router;
