document.getElementById("startBtn")?.addEventListener("click", function () {
    window.location.href = "map.html";
});

const levels = document.querySelectorAll(".level");

levels.forEach((level, index) => {
    level.addEventListener("click", () => {
        if(index === 0){
            window.location.href = "level1.html";
        }else{
            alert("Level locked!");
        }
    });
});


/* QUESTIONS SYSTEM */

const questions = [
{
word: "🍎",
correct: "Apple",
options: ["Apple", "Car", "House"]
},
{
word: "🚗",
correct: "Car",
options: ["Banana", "Car", "Dog"]
},
{
word: "🏠",
correct: "House",
options: ["Tree", "House", "Chair"]
}
];

let currentQuestion = 0;


/* SCORE SYSTEM */

const answers = document.querySelectorAll(".answer");
const result = document.getElementById("result");

let score = 0;
const scoreDisplay = document.getElementById("score");


answers.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.textContent === questions[currentQuestion].correct) {

            score += 10;
            scoreDisplay.textContent = "Score: " + score;

            result.textContent = "Correct! You earned 10 points!";

            currentQuestion++;

            if(currentQuestion < questions.length){
                loadQuestion();
            }else{
                result.textContent = "Level Complete! 🎉";
            }

        } else {

            result.textContent = "Wrong answer. Try again!";

        }

    });
});


/* LOAD QUESTION */

function loadQuestion(){

const question = questions[currentQuestion];

document.querySelector("h2").textContent = "What is this word?";
document.getElementById("word").textContent = question.word;

const buttons = document.querySelectorAll(".answer");

buttons.forEach((btn, index) => {
    btn.textContent = question.options[index];
});

}

loadQuestion();