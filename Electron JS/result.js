// const date = require("./renderer.js");
// import {date} from './renderer.js';

// var date = localStorage.getItem("date");

var date;
var km;
var conso;
var carbone;
var age;
var km_an;
var year;

document.getElementById("home_button").addEventListener("click", function() {
    window.location.href = "index.html";
})

var dateDisassembled = localStorage.getItem('date').split('-');
date = "Date d'achat : " + dateDisassembled[2] + "/" + dateDisassembled[1] + "/" + dateDisassembled[0];
document.getElementById("date_display").innerHTML = date;

var today = new Date();

var todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var todayDateDisassembled = todayDate.split('-')

year = parseInt(todayDateDisassembled[0]) - parseInt(dateDisassembled[0])

if (Math.abs(parseInt(todayDateDisassembled[1]) - parseInt(dateDisassembled[1])) >= 6 ) {
    year ++
}

if (year > 1) {
    age = year + " ans";
}
else {
    age = year + " an";
}
document.getElementById("age_display").innerHTML = age;

var kmDisassembled = localStorage.getItem('km');
km = "Kilométrage : " + kmDisassembled + " km";
document.getElementById("km_display").innerHTML = km;

km_an = Math.round(parseInt(kmDisassembled) / year);
document.getElementById("km/an_display").innerHTML = km_an + " km/an";

var consoDisassembled = localStorage.getItem('conso');
conso = "Consommation : " + consoDisassembled + " L/km";
document.getElementById("conso_display").innerHTML = conso;

var conso_an = Math.round((parseFloat(consoDisassembled) * km_an) / 100);
document.getElementById("conso/an_display").innerHTML = conso_an + " L/an"

var E5SP98 = Math.round(conso_an * 1.43)
document.getElementById("E5SP98").innerHTML = E5SP98 + " €/an"
var E5SP95 = Math.round(conso_an * 1.36)
document.getElementById("E5SP95").innerHTML = E5SP95 + " €/an"
var E85 = Math.round(conso_an * 0.68)
document.getElementById("E85").innerHTML = E85 + " €/an"

var cout_baisse = E5SP95 - E85;
document.getElementById("cout_baisse").innerHTML = cout_baisse + " € par an"

var carboneDisassembled = localStorage.getItem('carbone');
carbone = "Bilan carbone : " + carboneDisassembled + " g/km";
document.getElementById("carbone_display").innerHTML = carbone;

var carbone_an = Math.round(parseInt(carboneDisassembled) * km_an * 0.001);
document.getElementById("carbone/an_display").innerHTML = carbone_an + " kg/an";

document.getElementById("rejet").innerHTML = carbone_an + " kg de CO" + "2".sub() +" par an";

document.getElementById("rejet_baisse").innerHTML = carbone_an * 0.25 + " kg de CO" + "2".sub() +" par an";

if (document.getElementById("rejet_baisse").innerHTML != carbone_an * 0.25 + " kg de CO" + "2".sub() +" par an") {
window.location.reload();
}