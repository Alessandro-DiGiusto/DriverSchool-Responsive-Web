// Ottieni gli elementi HTML per il modulo di accesso e registrazione
const accessoForm = document.getElementById('accessoForm');
const registrazioneForm = document.getElementById('registrazioneForm');

// Ottieni i pulsanti di accesso e registrazione
const accessoButton = document.getElementById('accessoButton');
const registrazioneButton = document.getElementById('registrazioneButton');

// Gestisci la visualizzazione dei moduli in base ai clic sui pulsanti
accessoButton.addEventListener('click', () => {
    accessoForm.style.display = 'block';
    registrazioneForm.style.display = 'none';
});

registrazioneButton.addEventListener('click', () => {
    accessoForm.style.display = 'none';
    registrazioneForm.style.display = 'block';
});