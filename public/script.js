document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        // Opzioni FullCalendar personalizzate
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        initialView: 'dayGridMonth',
        selectable: true,
        select: function (info) {
            // Funzione chiamata quando viene selezionato un giorno
            // Qui puoi gestire l'invio della query al database per la prenotazione
            // Utilizza info.start e info.end per ottenere la data selezionata
            alert('Hai selezionato il giorno: ' + info.startStr);
        }
    });

    calendar.render();
});
