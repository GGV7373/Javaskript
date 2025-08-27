alert('hello world from script.js');

let navn = prompt('Hva heter du?');
let høyde = window.innerHeight;
let bredde = window.innerWidth;
let forandre = prompt('Hva skal på hver?');
let navn2 = prompt('Hva skal på siden?');

document.body.innerHTML += '<p>Hei ' + navn + '</p>';
document.body.innerHTML += '<p>Høyden på vinduet er ' + høyde + '</p>';
document.body.innerHTML += '<p>Bredden på vinduet er ' + bredde + '</p>';
document.body.innerHTML += '<h2>' + navn2 + '</h2>';
document.body.innerHTML += '<p>' + forandre + '</p>';
