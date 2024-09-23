/*
 * DOTS: Level Two
 *
 */


let score= 0

const balls = document.querySelectorAll(`.js-ball`)
const scoreDisplay = document.querySelector(`.js-score`)
const levelWinner = document.querySelector(`.level-winner`) 


balls.forEach (ball => {
ball.addEventListener (`click`, ()=>{
    score += 10; console.log(`current score: ${score}`)
    scoreDisplay.innerText= score
    if (score >= 100){
        levelWinner.style.opacity= 1
    }
}) })

// I don't really understand the "for each" function, and I added this at Kisha's suggestion.