document.querySelectorAll(".knap").forEach(function(button) {
    button.addEventListener("click", function() {
        const matte = Math.floor(Math.random() * 6);
        console.log(matte)
        if (matte === 5)
            alert("Du fant knappen");
        else
            alert("Feil knapp");
    });
});