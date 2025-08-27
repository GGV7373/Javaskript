alert('hello world from script.js');

let navn = prompt('hva heter du?');
document.write('hei ' + navn);

let høyde = window.innerHeight;
document.write(' høyden på vinduet er ' + høyde);

let breddee = window.innerWidth;
document.write(' bredden på vinduet er ' + breddee);

let navn2 = prompt('Hva skal på siden?') 

document.body.innerHTML += '<h2>' + navn2 + '</h2>';
