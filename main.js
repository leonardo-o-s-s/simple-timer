/*
ao clicar no botao play, chamar a função play e colocar os dados na tela dinamicamente


*/

const conteudoCronometro = document.getElementById("conteudo__cronometro")
const botaoPlay = document.getElementById("play")
const botaoPause = document.getElementById("pause")
const botaoStop = document.getElementById("stop")
let seconds = 0
let minutes = 0

conteudoCronometro.innerHTML = `<h1>${minutes}:${seconds}</h1>`

botaoPlay.addEventListener("click", () => {
    numbers = setInterval(timer, 1000);
    botaoPlay.style.visibility = "hidden";
})

botaoPause.addEventListener("click", () => {
    clearInterval(numbers);
    botaoPlay.style.visibility = "visible";
})

botaoStop.addEventListener("click", () => {
    clearInterval(numbers);
    minutes = 0;
    seconds = 0;
    conteudoCronometro.innerHTML = `<h1>${minutes}:${seconds}</h1>`;
    botaoPlay.style.visibility = "visible";
})

// function showNumbers(minutos, segundos) {
//     conteudoCronometro.innerHTML = `
//     <h1>${minutos}:${segundos}</h1>
//     `
// }

function playTimer() {
    setInterval(timer, 100)
}

function timer() {
    seconds++
    conteudoCronometro.innerHTML = `
    <h1>${minutes}:${seconds}</h1>
    `

    if (seconds == 60) {
        minutes++
        seconds = 0
    }
}
// <h1>00:00</h1>