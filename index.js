const express = require('express');
const path = require('path'); // Importa il modulo 'path'

const app = express();
const port = process.env.PORT || 8000; // Sostituisci con la porta desiderata

// Configura Express per servire i file statici dalla cartella 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Definisci la route per la radice del tuo sito
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Avvia il server sulla porta specificata
app.listen(port, () => {
    console.log(`Server avviato sulla porta ${port}`);
});
