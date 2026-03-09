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

answers.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.textContent === "Apple") {
            result.textContent = "Correct! You earned 10 points!";
        } else {
            result.textContent = "Wrong answer. Try again!";
        }

    });
});

