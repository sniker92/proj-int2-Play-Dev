const dino = document.querySelector('.dino');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")) {
        jump();
    }
});

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        alreadyJump = true;

        setTimeout(() =>{
            dino.classList.remove("jump");
            alreadyJump = false;
        }, 1100);
    }
};

setInterval(() => {
    let dinoBottom = parseInt(
        window.getComputedStyle(dino).getPropertyValue("bottom")
    );
    let pipeLeft = parseInt(
        window.getComputedStyle(pipe).getPropertyValue("left")
    );

    if (pipeLeft > 40 && pipeLeft < 415 && dinoBottom <= 50 && !alreadyJump) {
        alert(`Game Over! Seu Score foi: ${count}`);
        count = 0;
    }

    count++;
    score.innerHTML = `SCORE: ${count}`;
}, 10);