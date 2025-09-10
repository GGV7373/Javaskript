document.querySelectorAll(".feil").forEach(function(ls) { // for class
    ls.addEventListener("click", function(){
        alert("Feil");
    })
});

document.getElementById("rikdig").addEventListener("click", function() { // for id
    alert("Rikdig");
});