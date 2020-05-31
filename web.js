displayDate('date');

//display the date
function displayDate(id){
	const date = new Date();
	let elem = document.getElementById(id);
	elem.textContent = date.toString();
}

let counter = 0;
//changes the counter when the button is pressed
function increaseCount(id){
	let counterText = document.getElementById(id);
	counter++;
	counterText.textContent = String(counter);
	
}