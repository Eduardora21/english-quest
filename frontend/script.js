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


const answers = document.querySelectorAll(".answer");
const result = document.getElementById("result");

let score = 0;
const scoreDisplay = document.getElementById("score");

answers.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.textContent === "Apple") {

            score += 10;
            scoreDisplay.textContent = "Score: " + score;

            result.textContent = "Correct! You earned 10 points!";

        } else {

            result.textContent = "Wrong answer. Try again!";

        }

    });
});

