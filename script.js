let musicafundo = new Audio('musicadefundo.mp3')
musicafundo.loop = true
function musicadefundo () {
musicafundo.play() ;
}
function colide(obj1, obj2) {
    const r1 = obj1.getBoundingClientRect();
    const r2 = obj2.getBoundingClientRect();

    return (
        r1.left < r2.right &&
        r1.right > r2.left &&
        r1.top < r2.bottom &&
        r1.bottom > r2.top
    );
}
const player = document.querySelector("#player");
const matar = document.getElementById('matar') ;
const matar2 = document.getElementById('matar2') ;
const matar3 = document.getElementById('matar3') ;
const matar4 = document.getElementById('matar4') ;
const matar5 = document.getElementById('matar5') ;
let pulando = false ;
let x = 100;
let y = 100;
const velocidade = 5;

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowUp") {
            e.preventDefault();
        if (pulando == false) {
            pulando = true;
            y -= 100;
        player.style.top = y + "px";
        setTimeout(() => {
            y += 100;
            player.style.top = y + "px";
            pulando = false ;
        }, 4000);
        }
    
    }
    if (e.code === "ArrowLeft") {
        e.preventDefault();
        x -= velocidade;
    }
    if (e.code === "ArrowRight") {
        e.preventDefault();
        x += velocidade;
    }
    if (e.code === "Space") {
        e.preventDefault();
        if (pulando == false) {
            pulando = true;
            y -= 100;
        player.style.top = y + "px";
        setTimeout(() => {
            y += 100;
            player.style.top = y + "px";
            pulando = false ;
        }, 4000);
        }
    }
    player.style.left = x + "px";
    player.style.top = y + "px";
});
function gameLoop() {
if(colide(matar, player)) {
    alert('Você perdeu!')
    location.reload() ;
}
if (colide(matar2, player)) {
    alert('Você perdeu!')
    location.reload() ;
}
if (colide(matar3, player)) {
    alert('Você perdeu!')
    location.reload() ;
}
if (colide(matar4, player)) {
    alert('Você perdeu!')
    location.reload() ;
}
if (colide(matar5, player)) {
    alert('Você perdeu!')
    location.reload() ;
}

     requestAnimationFrame(gameLoop);
}
 requestAnimationFrame(gameLoop);
 function telacheia() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
 }
 const celular = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
 if (celular) {
    let botaoright = document.createElement("button");

botaoright.textContent = "→";

botaoright.onclick = function () {
        x += velocidade;
        player.style.left = x + "px";
};

document.body.appendChild(botaoright);
     let botaoleft = document.createElement("button");

botaoleft.textContent = "←";

botaoleft.onclick = function () {
        x -= velocidade;
        player.style.left = x + "px";
};
     let botaocima = document.createElement("button");

botaocima.textContent = "↑";

botaocima.onclick = function () {
 y -= 100;
        player.style.top = y + "px";
        setTimeout(() => {
            y += 100;
            player.style.top = y + "px";
        }, 4000);
};

document.body.appendChild(botaoleft);
document.body.appendChild(botaocima);
    alert('Bem vindo!\nVersão do jogo: v0.0.1\n(Você está um dispositivo móvel)')
 } else {
    alert('Bem vindo!\nVersão do jogo: v0.0.1\n(Você está no computador)')
 }
