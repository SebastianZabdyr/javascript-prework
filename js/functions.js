function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
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
    }
		else{
			printMessage ('zła liczba')
		}
  }

	function displayResult(argComputerMove, argPlayerMove){
	  printMessage('ja zagrałem ' + argComputerMove + ', ty zagrałeś ' + argPlayerMove);
	  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	    printMessage('Ty wygrywasz!');
	  }
		else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		  printMessage('Ty wygrywasz!');
		}
		else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			  printMessage('Ty wygrywasz!');
			}
		else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
				printMessage('Ty wygrywasz!');
			}
			else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
				  printMessage('Ty wygrywasz!');
			}
			else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
				  printMessage('Remis!');
			}
			else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
				  printMessage('Remis!');
				}
		else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
					  printMessage('Remis!');3
					}
			else {
		printMessage ('przegrywasz')
	}
}
