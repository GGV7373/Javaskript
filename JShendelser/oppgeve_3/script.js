document.querySelectorAll(".knap").forEach(function(button) {
    button.addEventListener("click", function() {
        if (Math.floor(Math.random() * 6) === 5)
            alert("Du fant knappen");
        else
            alert("Feil knapp");
    });
});