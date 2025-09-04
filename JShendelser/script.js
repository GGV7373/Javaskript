// oppgave 1
document.getElementById("knap").addEventListener("click", function() {
    alert("Hei Vic")
})

// oppgeve 2
document.getElementById("h1").addEventListener("click", function() {
    document.getElementById("h1").innerHTML = 'General Kenobi';
})
document.getElementById("h1").addEventListener("mouseenter", function() {
    this.style.color = 'red';
})