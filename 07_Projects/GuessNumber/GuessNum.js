let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const previousInputs = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess =[]
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess =parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  
  }else if(guess<1){
    alert('Please enter a number greater than 1')

  
  }else if(guess>100){
    alert('Please enter a number less than 100')

  }else{
    prevGuess.push(guess)
    if(numGuess==11){
      displayGuess(guess)
      displayMsg(`GameOver. Random Number was ${randomNum}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess){
  if(guess==randomNum){
    displayMsg(`your guess is right`)
    endGame()
  }else if(guess < randomNum){
    displayMsg('number is too low')
  }
  else if(guess > randomNum){
    displayMsg('number is too high')
  }
}
function displayGuess(guess){
userInput.value=''
previousInputs.innerHTML+=`${guess},`
numGuess++;
remaining.innerHTML=`${11-numGuess}`;
}

function displayMsg(message){
  lowOrHi.innerHTML=`<h3>${message}</h3>`
}

function endGame(){
userInput.value=""
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id='newGame'> start new game</h2>`
startOver.appendChild(p)
playGame=false
newGame()
}
function newGame(){
  const newGameButton = documet.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    let randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess =[]
    numGuess=1
    previousInputs.innerHTML=''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disable')
    startOver.removeChild(p)
    playGame=true
  })  //
}