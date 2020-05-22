// get the buttons
// get the marker

let moveCount = 0; // keeps track of the number of moves
let tableArray = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]; // 2D array to store the user's input history.
const possibleList = ["000","001","010","011","100","101","110","111"]; 
let lastMove = 0;
let lastThreeMoves = [0,0,0];
let forecast = 0;
let compGuess =0;

// reset function
function resetGame(){
	
	// reset table
	tableArray = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
	
	// resets the last three moves to 0.
    lastThreeMoves[0] = 0;
    lastThreeMoves[1] = 0;
    lastThreeMoves[2] = 0;
    
    // resets the moveCount back to 0.
    moveCount = 0;
	
	// reset meter
	let meter = document.getElementById('scoreMeter');
	meter.textContent = '----------^----------';	
	
	// notify player
	let disp = document.getElementById("display")
	disp.textContent = 'Game Reset';
}

// display the board, last 3 moves and forecast
function displayTable(){
	let disp = document.getElementById("display")
	disp.textContent = tableArray.toString();
}	

// updates the table by adding 1 to the corresponding row and column in the 2D array.
function updateTable(num){
	
	let i = 0;
	let str = lastThreeMoves.join('');
	for( i = 0; i < 8; i++){
		if(possibleList[i] == str){
			if(num == 1){
				tableArray[i][1]++;
			}
			else{
				tableArray[i][0]++;
			}
		}
	}
}

// compares the userInput and computerGuess values and move the marker,
// tells the user who got a point, and updates the last three moves.
function score(num){
	//check end state
	let meter = document.getElementById('scoreMeter');
	let innerMeter = meter.textContent;	
	if(innerMeter.charAt(0) == '^' || innerMeter.charAt(20) == '^'){
		return
	}
	//make the computer predict first;
	computerPrediction();
	
	//add user input to table;
	updateTable(num);
	
	//move the marker and return feedback
	moveMarker(num);
	
	//update last three moves
    lastThreeMoves[0] = lastThreeMoves[1];
    lastThreeMoves[1] = lastThreeMoves[2];
    lastThreeMoves[2] = num;
}

// Moves the '^' marker left or right depending on the result of scoreUpdate.
function moveMarker(userNum){
	
	let meterEl = document.getElementById('scoreMeter');
	let meter = meterEl.textContent;	
	let direction = 0;
	
	let disp = document.getElementById("display")
	
	// computer guessed correctly, move marker left
	if(userNum == compGuess){
		direction = -1;
		disp.textContent = "computer gets a point!";
	}	
	// user beats computer, move marker right
	else{
		direction = 1;
		disp.textContent = "user gets a point!";
	}
	
	// loop searches for '^' in the array and shifts it to the left or right once.
	let i = 0;
    for (i =0; i< 21; i++){
        if (meter.charAt(i) == '^'){
            meter.charAt(i + direction) = '^';
            meter.charAt(i) = ' ';
            break;
        }
    }
	
	// update meter element
	meterEl.textContent = meter;
	
	// checks if end state is reached
	if(i+direction == 0){
		disp.textContent = "Computer Wins";
	}
	else if(i+direction == 20){
		disp.textContent = "You Win!";
	}
}

// Makes a prediction based on previous guesses.
function computerPrediction(){
	
	// the first predition is a random number 1 or 0
	if(moveCount == 1){
		compGuess = Math.floor(Math.random() * 2);
	}
	
	// the 2nd and 3rd preditions is the opposite of the previous guess by the user
	else if((moveCount == 2) || (moveCount == 3)){
		if(lastMove == 0){
			compGuess = 1;
		}
		else{
			compGuess = 0;
		}
	}
	
	// predition is based of the last three moves
	else{
		let i = 0;
		let str = lastThreeMoves.join('');
		for( i = 0; i < 8; i++){
			if(possibleList[i] == str){
				
				// checks which side has highest frequency
				if(tableArray[i][0] > tableArray[i][1]){
					compGuess = 0
				}
				else if (tableArray [i][0] < tableArray [i][1]){
                    compGuess = 1;
                }
				
				// if a tie occurs return opposite of previous move
                else{
                    if (lastMatch == 0){
                        compGuess = 1;
                    }
                    else{
                        compGuess = 0;
                    }
                }
				break;
			}
		}
	}
}