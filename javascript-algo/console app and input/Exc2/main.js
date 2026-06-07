import promptSync from "prompt-sync";
const prompt = promptSync();

const quiz = [
    {
        question: "What is 2 + 2?",
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "What year is it?",
        answer: "2026"
    },
    {
        question: "What is the continent of Israel?",
        answer: "Asia"
    }
];

let score = 0;

for (let i = 0; i < quiz.length; i++) {
    const q = quiz[i];

    const answer = prompt(`Question ${i + 1}: ${q.question} `);

    if (answer.toLowerCase() === quiz[i].answer.toLowerCase()) {
        score++;
    }
}

console.log(`Final Score: ${score}/${quiz.length} correct!`);