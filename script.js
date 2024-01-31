
let cislo = Math.floor(Math.random()*6)+1;

document.body.innerHTML += cislo;

let cena = 12;
let pocetNavstevniku = 174;
let pocetPredstaveni = 15;
let prijem = cena*pocetNavstevniku*pocetPredstaveni

document.body.innerHTML += "<p>Mesicni prijem divadla ze vstupneho je " + prijem + " EUR. </p>";

let cenaStudent = 12*0.65;
let pocetStudentu = 174*0.4
let pocetDospelych = 174*0.6

let prijem2 = (cena*pocetDospelych + cenaStudent*pocetStudentu)*pocetPredstaveni

document.body.innerHTML += "<p>Se studentskou slevou je mesicni prijem divadla " + prijem2 + " EUR.</p>";

