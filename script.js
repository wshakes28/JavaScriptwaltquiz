let correctAnswer = document.querySelector(".correct-answer")
let incorrectAnswer = document.querySelector(".incorrect-answer")


let check = document.querySelector(".check")
let result = document.querySelector(".result")
let rightImg = document.querySelector("#rightImg")
let wrongImg = document.querySelector("#wrongImg")
let rightAnswer = document.querySelector(".right-answer")
let yourScore = document.querySelector(".yourscore")
let score = ''

function passScore() {
    yourScore.value 
    localStorage.setItem("score", yourScore)
}


function checkAnswers() {

    if(correctAnswer.checked) {
       result.innerText = "Correct!" 
     rightImg.hidden = false
     
     score++
    

     yourScore.innerText = yourScore.innerText + score

     passScore()

     

     
    } else  {
        result.innerText = "Wrong!"
     wrongImg.hidden = false
     rightAnswer.hidden = false
    }
}

check.addEventListener('click', e => {
    checkAnswers()
})