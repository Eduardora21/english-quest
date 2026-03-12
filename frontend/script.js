/* START BUTTON */

document.getElementById("startBtn")?.addEventListener("click", function () {
    window.location.href = "map.html";
});


/* MAP LEVEL SYSTEM */

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


/* QUESTIONS DATA */

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

            if(scoreDisplay){
                scoreDisplay.textContent = "Score: " + score;
            }

            if(result){
                result.textContent = "Correct! You earned 10 points!";
            }

            currentQuestion++;

            if(currentQuestion < questions.length){

                loadQuestion();

            }else{

                if(result){
                    result.textContent = "Level Complete! 🎉";
                }

                localStorage.setItem("level2Unlocked", "true");

            }

        } else {

            if(result){
                result.textContent = "Wrong answer. Try again!";
            }

        }

    });

});


/* LOAD QUESTION FUNCTION */

function loadQuestion(){

    const question = questions[currentQuestion];

    const wordElement = document.getElementById("word");

    if(wordElement){
        wordElement.textContent = question.word;
    }

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach((btn, index) => {
        btn.textContent = question.options[index];
    });

}


/* START GAME QUESTIONS */

if(document.getElementById("word")){
    loadQuestion();
}


/* LEVEL UNLOCK SYSTEM */

const level2 = document.getElementById("level2");

if(level2 && localStorage.getItem("level2Unlocked") === "true"){

    level2.classList.remove("locked");

}

const foxMap = document.getElementById("fox-map");

if(foxMap){

    if(localStorage.getItem("level2Unlocked") === "true"){

        foxMap.style.top = "180px";
        foxMap.style.left = "120px";

    }

}

const foxDialogue = document.getElementById("fox-dialogue");

if(foxDialogue){

    if(localStorage.getItem("level2Unlocked") === "true"){

        foxDialogue.textContent = "Great job! Level 2 is now unlocked!";

    }else{

        foxDialogue.textContent = "Hello adventurer! Click Level 1 to begin your quest!";

    }

}