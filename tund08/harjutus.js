let kasutajaNimi = prompt("Sisesta nimi")

let tervitusElement = document.getElementById("tervitus")

if (kasutajaNimi == "Kalle" || kasutajaNimi == "Malle") {
    tervitusElement.innerHTML = `<h2>Tere, kallis sõber  ${kasutajaNimi}</h2>`
    for (let index = 1; index <= 10; index+= 1) {
        tervitusElement.innerHTML += `<p>Tere-Tere ${index}. korda</p>`
    }
} else if (!kasutajaNimi) {
    tervitusElement.innerHTML = `<p class="punane">Jätsite nime sisestamata</p>`
} else {    
    tervitusElement.innerHTML = `<h2>Tere, ${kasutajaNimi}</h2>`
    tervitusElement.innerHTML += `<h2>Tähed sinu nimes:</h2>`
    for (let index = 0; index < kasutajaNimi.length; index++ ) {
        tervitusElement.innerHTML += `<div>Täht nr ${index} : ${kasutajaNimi[index]}</div>`
    }
}