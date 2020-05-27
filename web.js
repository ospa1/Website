//display the date
function displayDate(id){
	const date = new Date();
	let elem = document.getElementById(id);
	elem.textContent = date.toString();
}

//changes the counter when the button is pressed
function increaseCount(id){
	let counterText = document.getElementById(id);
	let val = counterText.value;
	let count = Number(val);
	count++;
	counterText.textContent = String(count.toString());
	
}