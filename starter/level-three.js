/*
 * DOTS: Level Three
 *
 */


let score= 0

const balls = document.querySelectorAll(`.js-ball`)
const scoreDisplay = document.querySelector(`.js-score`)
const levelWinner = document.querySelector(`.level-winner`) 


balls.forEach (ball => {
ball.addEventListener (`click`, ()=>{
    const incrementValue = parseInt(ball.getAttribute('data-increment'))
    console.log(incrementValue) 
    score += incrementValue
    scoreDisplay.innerText= score.toString()
    if (score >= 100) {
        levelWinner.style.opacity= 1
    }
}) })





//Used the below from Kisha's code as well, but still confused as to how it works.
// const incrementValue = parseInt(ball.getAttribute('data-increment'))
//     console.log(incrementValue)    
//     score += incrementValue;



// Level 2 Code for reference

// let score= 0

// const balls = document.querySelectorAll(`.js-ball`)
// const scoreDisplay = document.querySelector(`.js-score`)
// const levelWinner = document.querySelector(`.level-winner`) 


// balls.forEach (ball => {
// ball.addEventListener (`click`, ()=>{
//     score += 10; console.log(`current score: ${score}`)
//     scoreDisplay.innerText= score
//     if (score >= 100){
//         levelWinner.style.opacity= 1
//     }
// }) })