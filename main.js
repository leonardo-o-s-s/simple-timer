/*
ao clicar no botao play, chamar a função play e colocar os dados na tela dinamicamente


*/

const conteudoCronometro = document.getElementById("conteudo__cronometro")
const botaoPlay = document.getElementById("play")
const botaoPause = document.getElementById("pause")
const botaoStop = document.getElementById("stop")
const seconds = 0
const minutes = 0

botaoPlay.addEventListener("click", play)

botaoPause.addEventListener("click", () => {
    console.log("pause")
})

botaoStop.addEventListener("click", () => {
    console.log("stop")
})

function play() {
    conteudoCronometro.innerHTML = `
    <h1>${minutes}:${seconds}</h1>
    `
}
// <h1>00:00</h1>