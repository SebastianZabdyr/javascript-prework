
function playGame(playerInput) {
  function clearMessages() {
  	document.getElementById('messages').innerHTML = '';
  }
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  console.log('Gracz wpisał: ' + playerInput);
  let playerMove = getMoveName(playerInput);
  displayResult(playerMove, computerMove);
}

// FirstButton
function button1Clicked(){
  playGame(1);
}

let rockButton = document.getElementById('rock');

rockButton.addEventListener('click', button1Clicked);

//SecondButton
function button2Clicked(){
  playGame(2);;
}

let paperButton = document.getElementById('paper');

paperButton.addEventListener('click', button2Clicked);

//ThirdButton
function button3Clicked(){
  playGame(3);;
}

let scissorsButton = document.getElementById('scissors');

scissorsButton.addEventListener('click', button3Clicked);
