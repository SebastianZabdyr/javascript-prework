function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
  return 'ROCK';
  } else if (argMoveId == 2) {
  return 'PAPER';
  } else if (argMoveId == 3) {
  return 'SCISSORS';
  } else {
		printMessage ('WRONG NUMBER')
	}
}

function displayResult(argComputerMove, argPlayerMove) {
	console.log('wywołano funkcję displayResult z argumentem: ' + argComputerMove + argPlayerMove);
		printMessage('I CHOICE ' + argComputerMove + ' , COMPUTER CHOICE ' + argPlayerMove);
	if ( argComputerMove == 'ROCK' && argPlayerMove == 'PAPER') {
		printMessage('COMPUTER WIN!');
	} else if ( argComputerMove == 'PAPER' && argPlayerMove == 'SCISSORS') {
		printMessage('COMPUTER WIN!');
	} else if ( argComputerMove == 'SCISSORS' && argPlayerMove == 'ROCK') {
		printMessage('COMPUTER WIN!');
	} else if ( argComputerMove == 'SCISSORS' && argPlayerMove == 'ROCK') {
		printMessage('COMPUTER WIN!');
	} else if ( argComputerMove == 'SCISSORS' && argPlayerMove == 'PAPER') {
		printMessage('COMPUTER WIN!');
	} else if ( argComputerMove === argPlayerMove) {
		printMessage('REMIS!')
	} else {
	printMessage ('I WIN!')
	}
}
