
let cislo = Math.floor(Math.random()*6)+1;

document.body.innerHTML += cislo;

let cena = 12;
let pocetNavstevniku = 174;
let pocetPredstaveni = 15;
let prijem = cena*pocetNavstevniku*pocetPredstaveni

document.body.innerHTML += "<p>Mesicni prijem divadla ze vstupneho je " + prijem + " EUR. </p>";

