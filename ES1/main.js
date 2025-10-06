let listaPuntata = document.getElementById("listaPuntata")
let numeriSalvati = document.getElementById("numeriSalvati")
let messErrVis = document.getElementById("messaggioErroreVisualizza")
const totNumeri = 10
const offset = 100
function setup(){
    if(localStorage.length != 0 && localStorage.length != 10){
        for(let i = 0; i < totNumeri; i++){
            let num = localStorage.getItem(i + offset)
            let listItem = document.createElement("li")
            listItem.textContent = num
            numeriSalvati.appendChild(listItem)
            num = localStorage.getItem(i)
            let listItem2 = document.createElement("li")
            listItem2.textContent = num
            listaPuntata.appendChild(listItem2)

        }
    }
    
}
setup()
function clearList(lista){ 
    let listElements = lista.querySelectorAll("li")
    for(let i = 0 ; i < listElements.length; i++){
        lista.removeChild(listElements[i])
    }
}
function generate(){
    clearList(listaPuntata)
    for(let i = 0; i < totNumeri; i++){
        let randomNumber = Math.floor(Math.random()*100)
        let listItem = document.createElement("li")
        listItem.textContent = randomNumber
        listaPuntata.appendChild(listItem)
        localStorage.setItem(i, randomNumber)
    }
    messErrVis.innerHTML = ""
}

function retrieve(){
    clearList(numeriSalvati)
    messErrVis.innerHTML = ""
    if(localStorage.length != 0){
        for(let i = 0; i < totNumeri; i++){
            let num = localStorage.getItem(i)
            let listItem = document.createElement("li")
            listItem.textContent = num
            numeriSalvati.appendChild(listItem)
            localStorage.setItem(i + offset, num)
        }
    }
    else{
        messErrVis.innerHTML = "Non ci sono numeri salvati nel LocalStorage"
    }
    
}


function clearCache(){
    localStorage.clear()
    clearList(listaPuntata)
    clearList(numeriSalvati)
}

function update(){
    location.reload()
}
