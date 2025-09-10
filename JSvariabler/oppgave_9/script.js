const quizData = [
    { question: "Who is Frodo?", answers: ["A hobbit", "A man", "An Elf"], correct: 0 },
    { question: "Where does Frodo live?", answers: ["Rivendell", "Gondor", "Shire", "Mordor"], correct: 2 },
    { question: "Who is Aragorn?", answers: ["A man", "An Elf", "A dwarf", "A hobbit"], correct: 0 },
    { question: "And what is his wife name?", answers: ["Éowy","Arwen","Ioreth","Rose"], correct: 1},
    { question: "How is the best?", answers: ["Sam", "Pippin", "Mery", "Frodo" ], correct: 0 }
    // add more questions
];

let current = 0, score = 0;

function loadQuestion() {
    if (current >= quizData.length) { // checks if quiz is finished
        document.getElementById("question").textContent = 'Quizen er ferdig';
        document.getElementById("answers").innerHTML = "";
        document.getElementById("result").textContent = `Du scorte ${score} av ${quizData.length} mulige riktige`;
        return;
    }

    const q = quizData[current]; // sets q as the curent quixData
    document.getElementById("question").textContent = q.question; //Prints the curent quizData question
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.textContent = ans;
        btn.onclick = () => {
            if (i === q.correct) score++;
            current++;
            loadQuestion();
        };
        answersDiv.appendChild(btn);
    });
}

loadQuestion();