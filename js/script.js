
{
const playGame = function (playerInput) {
  const clearMessages = function () {
    document.getElementById('messages').innerHTML = '';
  }
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('Gracz wpisał: ' + playerInput);
  const playerMove = getMoveName(playerInput);
  displayResult(playerMove, computerMove);
}

const button2Clicked = function(){
  playGame(2);
}

const button3Clicked = function(){
  playGame(3);
}

const button1Clicked = function (){
  playGame(1);
}

const rockButton = document.getElementById('rock');
      paperButton = document.getElementById('paper');
      scissorsButton = document.getElementById('scissors');

const rockButton.addEventListener('click', button1Clicked);
      paperButton.addEventListener('click', button2Clicked);
      scissorsButton.addEventListener('click', button3Clicked);
}
