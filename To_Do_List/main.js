let note = []
let idSelezionati = []
let filtroCorrente = 'all'

//Funzione per memorizzare lo stato attuale in cui mi trovo: note, selezionati e filtri attivi
function salvaLocalStorage(){
    try{
        localStorage.setItem('note', JSON.stringify(note));
        localStorage.setItem('idSelezionati', JSON.stringify(idSelezionati))
        localStorage.setItem('filtroCorrente', filtroCorrente);
    } catch(e){
        console.errore('Errore nel salvataggio dei dati: ', e);
    }
}

function aggiungiNota(){
    const titolo = document.getElementById('titoloNota').value.trim();
    const priorita = document.getElementById('priorita').value;
    const descrizione = document.getElementById('descrizioneNota').value.trim();
    const datascadenza = document.getElementById('datascadenza').value;

    if(titolo === ''){
        alert('Inserisci un titolo per la nota');
        return;
    }

    if(priorita === "Scegli la priorità"){
        alert('Seleziona una priorita')
        return;
    }
    let valorePriorita;
    if(priorita.includes('Bassa')) valorePriorita = 'bassa'
    else if (priorita.includes('Media')) valorePriorita = 'media'
    else if (priorita.includes('Alta')) valorePriorita = 'alta'

    const now = new Date();
    const nota = {
        id: Date.now(),
        titolo: titolo,
        descrizione: descrizione,
        priorita: valorePriorita,
        prioritaLabel: priorita,
        datascadenza: datascadenza || null,
        completata: false,
        createdAt: now.toISOString(),
        dateFormatted: now.toLocaleDateString('it-IT', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }),
        timeFormatted: now.toLocaleTimeString('it-IT',{ 
            hour:'2-digit',
            minute: '2-digit'
        })
    };

    note.push(nota)
    document.getElementById('titoloNota').value = '';
    document.getElementById('priorita').selectedIndex = 0;
    document.getElementById('descrizioneNota').value = '';
    document.getElementById('dataScadenza').value = '';

    salvaLocalStorage();
    //renderNotes();
    //updateStats();
}

function renderNotes(){
    const lista = document.querySelector('.todoList');
    const noteFiltrate = getFilteredNotes();
    
    lista.innerHTML = filteredNotes.map()
}

