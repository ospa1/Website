//display the date
var date = new Date();
var elem = document.getElementById('date');
elem.textContent = date.toString();


//changes the counter when the button is pressed
var count = 0;
function increaseCount(){
	var counterText = document.getElementById('counter');
	count++;
	counterText.textContent = String(count);
}
