document.getElementById("startBtn")?.addEventListener("click", function () {
    window.location.href = "map.html";
});

const levels = document.querySelectorAll(".level");

levels.forEach((level, index) => {
    level.addEventListener("click", () => {
        alert("Starting Level " + (index + 1));
    });
});
