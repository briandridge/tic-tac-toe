

// var xGoesFirst = ['x','o','x','o','x','o','x','o','x'];
// console.log(xGoesFirst);
// var xArray = [];
// var oArray = [];
// var clickNumber = 0;


// // if clickNumber %2 === 0;
// // 	useO;
// // 	else useX;

// // what is it
// var box = document.querySelectorAll('td');
// 	console.log(box);

// // what does function do
// var clickBox = function() {
// 	box.innerHTML = "x";
// 	console.log("clickbox function works");
// 	box1 = document.getElementById("1");	
	
// 	xArray.push(box1);
// 	box1.setAttribute("class", "xClick");
// 	clickNumber ++;
// 	console.log(clickNumber);
	
// };

// clickBox();

// // event listener fires function
// var listenToClicks = document.getElementById("board");
// listenToClicks.addEventListener("click", clickBox()); 
// 	console.log("made listener");


// // listenToClicks();


// var resetButton = document.getElementById("reset");
// console.log(resetButton);

// var reset = function() {
// 	resetButton.addEventListener("click", function() {
// 		box.setAttribute("class", "blankState");
// 		box.innerHTML = "";
// 		console.log("reset!");
// 	});
// };

// reset();
	
// // if xArray.length === odd sum;
// 	// then

// // var clear = function () {
	// button.onClick = box. innerHTML = "";



// check for winning combos
// if xArray === [1,2,3] || [4,5,6] || [7,8,9] || [1,4,7] || [2,5,8] || [3,6,9] || [1,5,9] || [3,5,7] {
// 		alert("Success")
// 	}


// ok // - A user should see a 3x3 grid for the tic-tac-toe board
// ok // A user should be able to click on different squares to make a move
// ok // Every click will mark the letter `X` or `O` (does not need to alternate)
// ok // Upon marking of an individual cell, use JavaScript to add a class to
//  	each cell to display a color (either background or text--both is better)
// - A user should be able to click a reset button that will clear the contents of the board

// var clicknumber=0;
// var box1 = document.getElementById("box1");
// console.log(clicknumber, box1);


// var play = function() {
//   var board = document.querySelectorAll("td");
//   box1.addEventListener("click", function() {
//     if (clicknumber %2 === 0) {
//       this.innerHTML = "x";
//       this.setAttribute("class", "xClick");
//       // checkForWin('x');
//     } else {
//       this.innerHTML = "o";
//       this.setAttribute("class", "oClick");
//       // checkForWin('x');
//     }
//     clicknumber ++;
//   });
// };

// play();




$(document).ready(function() {
    
	var clicknumber=0;  

	$('#board').find('td').on('click', function(){
	    if (clicknumber %2 === 0) {
	      this.innerHTML = "x";
	      this.setAttribute("class", "xClick");

	      // checkForWin('x');
	    	} else {
	      this.innerHTML = "o";
	      this.setAttribute("class", "oClick");
	      // checkForWin('o');
	   	}
	    clicknumber ++;
	 });

	
});






