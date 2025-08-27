
// Bytt bilde
let bilde = document.getElementById('bilde');
bilde.src = 'media/ful.jpg';

// Oppdater <p> med id "test"
let p = document.getElementById('p');
p.innerHTML = 'nå står dette her';

// Oppdaterer h1 med id "overskrift"
let h1 = document.getElementById('overskrift');
h1.textContent = 'h1';

// Legg til ny <p> basert på prompt
let tekst = prompt('hva skal stå i en ny <p>?');
let nyParagraf = document.createElement('p'); // lager nytt <p>-element
nyParagraf.textContent = tekst;               // setter teksten
document.body.appendChild(nyParagraf);        // legger det til nederst i body

