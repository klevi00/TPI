
function mostraCarta(id){

    const cartaEsistente = document.querySelector('.carta-dettaglio')
    if(cartaEsistente) cartaEsistente.remove()    
    const idPersona = document.getElementById(id)
    const riga = idPersona.closest('tr')
    const cognome = idPersona.textContent
    const nome = riga.querySelector('.nome').textContent
    const citta = riga.querySelector('.citta').textContent
    const eta = riga.querySelector('.eta').textContent

    const nuovaRiga = document.createElement('tr')
    nuovaRiga.classList.add('carta-dettaglio')
    if(id != 4 && id != 19){
        nuovaRiga.innerHTML = `
            <td colspan="5" class="p-0">
                <div class="flex justify-center py-4 opacity-0 transition-opacity duration-500" id="card-${id}">
                    <div class="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                            src="img/ragazzo1.png"
                            alt="${nome}" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">${cognome} ${nome}</h2>
                            <p>📍 <strong>Città:</strong> ${citta}</p>
                            <p>🎂 <strong>Età:</strong> ${eta} anni</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary btn-sm btn-chiudi">Chiudi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        `;
    }
    
    else{
        nuovaRiga.innerHTML = `
            <td colspan="5" class="p-0">
                <div class="flex justify-center py-4 opacity-0 transition-opacity duration-500" id="card-${id}">
                    <div class="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                            src="img/ragazza1.png"
                            alt="${nome}" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">${cognome} ${nome}</h2>
                            <p>📍 <strong>Città:</strong> ${citta}</p>
                            <p>🎂 <strong>Età:</strong> ${eta} anni</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary btn-sm btn-chiudi">Chiudi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        `;
    }

    riga.after(nuovaRiga)
    const bottoneChiudi = nuovaRiga.querySelector('.btn-chiudi')
    bottoneChiudi.addEventListener('click', chiudiCarta)

    setTimeout(() => {
        document.getElementById(`card-${id}`).classList.remove('opacity-0')
    }, 10)

    
}
function chiudiCarta(){
        const carta = document.querySelector(".carta-dettaglio")
        if(carta){
            const cartaDiv = carta.querySelector('div')
            cartaDiv.classList.add('opacity-0')

            setTimeout(() =>{
                carta.remove()
            }, 10)
        }
    }