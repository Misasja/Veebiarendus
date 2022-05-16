const pildid = [
    './pildid/apelsin.jpg',
    './pildid/banaan.png',
    './pildid/porgand.jpg'
]

let puuviljadeGalerii = ``

for (let puuvili of pildid) {
    puuviljadeGalerii += `<img src="${puuvili}">`
    console.log(puuviljadeGalerii)
}

//let galeriiElement = document.getElementById("galerii")
//galeriiElement.innerHTML = puuviljadeGalerii

document.getElementById("galerii").innerHTML = puuviljadeGalerii