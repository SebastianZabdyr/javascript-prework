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
  return 'kamień';
  } else if (argMoveId == 2) {
  return 'papier';
  } else if (argMoveId == 3) {
  return 'nożyce';
  } else {
		printMessage ('zła liczba')
	}
}

function displayResult(argComputerMove, argPlayerMove) {
	console.log('wywołano funkcję displayResult z argumentem: ' + argComputerMove + argPlayerMove);
		printMessage('Ja gram ' + argComputerMove + ', Komputer gra ' + argPlayerMove);
	if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
		printMessage('Komputer wygrywa!');
	} else if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
		printMessage('Komputer wygrywa!');
	} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		printMessage('Komputer wygrywa!');
	} else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		printMessage('Komputer wygrywa!');
	} else if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
		printMessage('Komputer wygrywa!');
	} else if ( argComputerMove === argPlayerMove) {
		printMessage('Remis!');
	} else {
	printMessage ('Ja wygrywam!')
	}
}
