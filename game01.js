// get the buttons
// get the marker

let moveCount = 0; // keeps track of the number of moves
let tableArray = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]; // 2D array to store the user's input history.
const possibleList = ["000","001","010","011","100","101","110","111"]; 
let lastMove = 0;
let lastThreeMoves = [0,0,0];
let forecast = 0;

// reset function
function resetGame(){
	
	// reset table
	tableArray = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
	
	//resets the last three moves to 0.
    lastThreeMoves[0] = 0;
    lastThreeMoves[1] = 0;
    lastThreeMoves[2] = 0;
    
    // resets the moveCount back to 0.
    moveCount = 0;
	
	// TODO notify player
}

// display the board, last 3 moves and forecast
function displayTable(){
	let disp = document.getElementById("display")
	disp.textContent = tableArray.toString();
}	

// updates the table by adding 1 to the corresponding row and column in the 2D array.
function updateTable(){
}

// compares the userInput and computerGuess values and move the marker,
// tells the user who got a point, and updates the last three moves.
function score(num){
}

// Moves the '^' marker left or right depending on the result of scoreUpdate.
function moveMarker(){
}

// Makes a prediction based on previous guesses.
function computerPrediction(){
}