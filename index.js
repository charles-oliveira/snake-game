const playBoard = document.querySelector('.player-board')

let foodX, foodY
let snakeX = 5,
  snakeY = 10

const random = () => {
  // Gera números randômicos entre 0 - 30 como posições para food
  foodX = Math.floor(Math.random() * 30) + 1
  foodY = Math.floor(Math.random() * 30) + 1
  console.log(`${foodX} and ${foodY}`)
}

const initGame = () => {
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`
  htmlMarkup += `<div class="snake" style="grid-area: ${snakeY} / ${snakeX}"></div>`
  playBoard.innerHTML = htmlMarkup
}

random()
initGame()
