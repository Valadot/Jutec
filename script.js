let gewebe1 = document.querySelector(".gewebe1")
let gewebe2 = document.querySelector(".gewebe2")
let gewebe3 = document.querySelector(".gewebe3")
let gewebe4 = document.querySelector(".gewebe4")
let auswahl = document.querySelector(".auswahl")
let partDescription = document.querySelector(".partdesc")
let preis = document.querySelector("#preis")
let laenge = document.querySelector("#länge")
let breite = document.querySelector("#breite")
let berechnen = document.querySelector(".berechnen")
let oese = document.querySelector("#oesen")
let productimg = document.querySelector(".product-img")
let oeseprice = 5
let price1 = 10;
let finalPrice = `(${breite.value * laenge.value / 100 * price1})`
let widthText = document.querySelector(".width-cm")
let lengthText = document.querySelector(".length-cm")
auswahl.onchange = runBackgroundChange;

// gewebe1.style.background = "green"

function runBackgroundChange(){
    if (auswahl.value == "gewebe-1" && breite.value >= 100 && laenge.value >= 100) {
        productimg.src = "1.jpg"
        partDescription.textContent = "Gewebe 1 mit XXX Schutz"
        lengthText.textContent = ""
        widthText.textContent = ""
        breite.value = ""
        laenge.value = ""
        preis.value = ""
        oese.value = ""
    } else if (auswahl.value == "gewebe-2"){
        productimg.src = "2.jpg"
        price1 = 20;
        partDescription.textContent = "Gewebe 2 mit XXX Schutz"
        lengthText.textContent = ""
        widthText.textContent = ""
        breite.value = ""
        laenge.value = ""
        preis.value = ""
        oese.value = ""
    } else if (auswahl.value == "gewebe-3"){
        productimg.src = "3.jpg"
        price1 = 30
        partDescription.textContent = "Gewebe 3 mit XXX Schutz"
        lengthText.textContent = ""
        widthText.textContent = ""
        breite.value = ""
        laenge.value = ""
        preis.value = ""
        oese.value = ""
    } else if (auswahl.value == "gewebe-4"){
        productimg.src = "4.jpg"
        price1 = 40
        partDescription.textContent = "Gewebe 4 mit XXX Schutz"
        lengthText.textContent = ""
        widthText.textContent = ""
        breite.value = ""
        laenge.value = ""
        preis.value = ""
        oese.value = ""
    };
}


berechnen.addEventListener("click", function(){
    if (breite.value >= 100 && laenge.value >= 100){
        preis.value = parseFloat(`${(breite.value * laenge.value / 10000) * (price1) + (oese.value * oeseprice)}`).toFixed(2) + "€"
        productimg.style.width = `${breite.value}px`
        productimg.style.height = `${laenge.value}px`
        lengthText.textContent = laenge.value + " cm"
        widthText.textContent = breite.value + " cm"
    } else {
        preis.value = "";
    }
})

