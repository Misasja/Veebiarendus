
let ylesanded

ylesanded = []

function valjastaYlesanded() {
    let sisuElement = document.getElementById("sisu")
    sisuElement.innerHTML = ""

    if (ylesanded.length == 0) {
        //lisa pilt
        sisuElement.innerHTML = '<img src"./apelsin.jpg" width="300">'
    } else {
        for (let i = 0; i < ylesanded.length; i += 1) {
            console.log(i + ". " + ylesanded[i])
            sisuElement.innerHTML += "<div>" + ylesanded[i] + "</div>"
        }
    }

}

function lisaYlesanne(uusYlesanne) {
    ylesanded.push(uusYlesanne)
    valjastaYlesanded()
}

function loeJaLisa() {
    let sisendElement = document.getElementById("sisend")
    if (sisendElement.value == false) {
        alert("Sisesta enne ülesanne")
    } else {
        lisaYlesanne(sisendElement.value)
        sisendElement.value = ""
    }
}


valjastaYlesanded()