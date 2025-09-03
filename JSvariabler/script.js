

// oppgave 1
let by = prompt("Hvilekn by bor du i?");

if (by === "Kristiansand") { 
    document.getElementById('p').innerHTML = 'Rikdig by'; }
else{
    document.getElementById('p').innerHTML = 'Feil by'; }

// oppgave 2
let nanvn = prompt("Hva hetter du?");

for(let i = 0; i < 11; i++) {
    document.write(" "+ nanvn + " " + i)
    i +=1; }

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
else{
    let svar = document.getElementById('svar').innerHTML = 'Du kan ikke drike ute på pub'; }
