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
                // Password corretta, esegui l'azione desiderata
                // Ad esempio, puoi reindirizzare l'utente a una pagina successiva
                res.redirect('/login.html');
            } else {
                // Password errata
                // Mostra un messaggio di errore sul lato client
                res.send(`
                    <script>
                        alert('Password errata. Riprova.');
                    </script>`, res.redirect('/index.html'));
            }
        } else {
            // Email non trovata
            // Mostra un messaggio di errore sul lato client
            res.send(`
                <script>
                    alert('Email non trovata. Registrati prima.');
                </script>
                `, res.redirect('/index.html')
            );
        }
    });
});



module.exports = router;
