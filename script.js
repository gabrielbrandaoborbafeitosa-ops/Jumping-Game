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
document.addEventListener("DOMContentLoaded", () => {
  player.style.left = (player.offsetLeft - 10) + "px";
});
    alert('Bem vindo!\nVersão do jogo: v0.4.10 (Você está um dispositivo móvel)')
 } else {
    alert('Bem vindo!\nVersão do jogo: v0.4.10(Você está no computador)')
 }
 //salvar nome
 let nome = localStorage.getItem("nome");
if (!nome) {
    nome = prompt("Digite seu nome:");
    localStorage.setItem("nome", nome);
}
//usar o nome
document.getElementById('txtnome').innerText = 'Olá, ' + nome + '! Bem vindo ao Jumping Game!'
function apagardados() {
    if (prompt("Se quer apagar todos os dados salvos, digite exatamente “aghu” para confirmar")=== "aghu") {
     localStorage.clear() ;
     location.reload() ;
}
}
const parametrourl = new URLSearchParams(window.location.search);
function mododev() {
    if (prompt('Senha do modo dev:') == "admin0101") {
        window.open('https://gabrielbrandaoborbafeitosa-ops.github.io/Jumping-Game/?mode=dev0124')
    } else {
        alert('Senha incorreta')
    }
}
if (parametrourl.get('mode') == "dev0124") {
    let codigojsdev = prompt('js')
    const script = document.createElement("script");
script.textContent = codigojsdev;
document.body.appendChild(script);
} 
if (parametrourl.get('mode') == "more") {
    
} 
function mais() {
window.open('https://gabrielbrandaoborbafeitosa-ops/Jumping-Game/?mode=more')
}
if (parametrourl.get('mode') == "more") {
    document.write('')
    let botaogithub = document.createElement("button");

botao.innerHTML = "Ver no GitHub";

document.body.appendChild(botaogithub);

botao.onclick = () => {
  window.open('https://github.com/gabrielbrandaoborbafeitosa-ops/Jumping-Game');
};
} 
