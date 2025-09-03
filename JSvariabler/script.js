

// oppgave 1
let by = prompt("Hvilekn by bor du i?");

if (by === "Kristiansand") { 
    document.getElementById('p').innerHTML = 'Rikdig by'; }
else{
    document.getElementById('p').innerHTML = 'Feil by'; }

// oppgave 2
let nanvn = prompt("Hva hetter du?");

for(let i = 0; i < 11; i++) {
    document.write(nanvn + " ")
    i +=1; }
document.write("<br>")

// oppgave 3
document.write("Svar er " + (15 % 2) + "<br>");
document.write("Svar er " + (15 % 3) + "<br>");
document.write("Svar er " + (10 % 3) + "<br>");
document.write("Svar er " + (12 % 3) + "<br>");
document.write("Svar er " + (16 % 2) + "<br>");

// oppgave 4
let age = prompt("Hvor gamme er du?");

if (age >= 21) {
    let svar = document.getElementById('svar').innerHTML = 'Du kan drike ute på pub'; }
else {
    let svar = document.getElementById('svar').innerHTML = 'Du kan ikke drike ute på pub'; }

// oppgave 5
let sum = 0
for(let i = 0; i < 101; i++) {
    sum = sum + i;
}
document.write(sum + "<br>");

// oppgave 6
let sum2 = 0
for(let i = 0; i < 101; i++) {
    if (i % 2 === 1){
        sum2 = sum2 + i;
    }
}
document.write(sum2 + "<br>");

// oppgeve 7
let sum3 = 0
for(let i = 0; i < 101; i++) {
    if (i % 3 === 0){
        sum3 = sum3 + i;
    }
}
document.write(sum3 + "<br>");

// oppgave 8

let sum4 = 0
let legde = prompt("hvor lagt skal den telle?")
for(let i = 0; i < legde; i++) {
    if (i % 3 === 0){
        sum4 = sum4 + i;
    }
}
document.write(sum4 + "<br>");
