
// Bytt bilde
let bilde = document.getElementById('bilde');
bilde.src = 'media/ful.jpg';

// Oppdater <p> med id "test"
let test = document.getElementById('test');
test.innerHTML = 'nå står dette her';

// Legg til ny <p> basert på prompt
let tekst = prompt('hva skal stå i en ny <p>?');
let nyParagraf = document.createElement('p'); // lager nytt <p>-element
nyParagraf.textContent = tekst;               // setter teksten
document.body.appendChild(nyParagraf);        // legger det til nederst i body

