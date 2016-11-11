// on click, create a div, append to  new div in 
var xArray = [];
var oArray = [];
var clickNumber = 0;

// what is it
var box = document.querySelectorAll('td');
	console.log(box);

// event listener fires function
var listenToClicks = function() {
	box.addEventListener("click", clickBox()); 
	console.log("made listener");
};

// what does function do
var clickBox = function() {
	box.innerHTML = "x";
	// var box1 = document.getElementById("1");	
	
	// xArray.push(box1);
	// box1.setAttribute("class", xClick)
	// clickNumber ++;
	
};

clickBox();


var reset = function() {
	var resetButton = document.getElementById("reset");
	var box = document.querySelectorAll('td');
	console.log(box);

	resetButton.addEventListener("click", function() {
		box.setAttribute("class", "blankState");
		box.innerHTML = "";
		console.log("reset!");
	});
};

reset();
	
// if xArray.length === odd sum;
	// then

// var clear = function () {
	// button.onClick = box. innerHTML = "";



// check for winning combos
// if xArray === [1,2,3] || [4,5,6] || [7,8,9] || [1,4,7] || [2,5,8] || [3,6,9] || [1,5,9] || [3,5,7] {
// 		alert("Success")
// 	}


// ok // - A user should see a 3x3 grid for the tic-tac-toe board
// - // A user should be able to click on different squares to make a move
// - // Every click will mark the letter `X` or `O` (does not need to alternate)
// - // Upon marking of an individual cell, use JavaScript to add a class to
//  each cell to display a color (either background or text--both is better)
// - A user should be able to click a reset button that will clear the contents of the board