# PROJECT RELATED TO DOM 
## PROJECT LINK

[click here]([text](https://stackblitz.com/edit/dom-project-chaiaurcode?file=6-unlimitedColors%2Findex.html))

# solution code
## project 1

```javascript

console.log('priyam')

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click' , (e)=>{
    console.log(e)
    console.log(e.target)
    body.style.backgroundColor = e.target.id
  })
});

```


## project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // stop any previous operations in here to prevent from submit

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'please select a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'please select a valid weight ';
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`;
  }
});


```

## project 3

```javascript
const clock = document.querySelector('#clock')

setInterval(()=>{
 let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)

```
## P4
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ' '
  userInput.setAttribute= ('disabled' , ' ')
  p.classList.add('button')
  p.innerHTML= `<h2 id = "newGame">Start new game</h2>`;
  startOver.appendChild(p)
  playGame=false
  newGame()
}

function newGame() {
  


  }

```

## project 05
```javascript
let hex = '0123456789ABCDEF';
const changingColor = () => {   
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color+= hex[Math.floor(Math.random()*16)]  
    }
    return color;
}

let intervalId;
function startChanging(){
 if (!intervalId){    intervalId = setInterval(changeBg , 1000)
    function changeBg(){
        document.body.style.backgroundColor = changingColor()
    }
    
    console.log('started Changing');
}
}
function stopChanging(){
    clearInterval(intervalId)
    console.log('stopped Changing');
    intervalId == null
}


document.querySelector('#start').addEventListener('click',startChanging)
document.querySelector('#stop').addEventListener('click',stopChanging)

```
## project 06
```javascript
const insert = document.querySelector('#insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class="color">
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===' '?"space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
    `
})

```