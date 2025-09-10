const p = document.getElementById("texst");
const words = p.textContent.split(" "); 

// Replace text with clickable spans
p.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(" ");

document.querySelectorAll("#texst .word").forEach(span => {
  span.addEventListener("click", () => {
    if (span.textContent === "ord") {
      alert("Rikdig ord");
    } else {
      console.log("You clicked:", span.textContent);
    }
  });
});