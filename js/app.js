$(document).ready(function() {
    
	var clickNumber=0;  

	$('#board').find('td').on('click', function(){
	    if (clickNumber %2 === 0) {
	      this.innerHTML = "x";
	      this.setAttribute("class", "xClick");

	      // checkForWin('x');
	    	} else {
	      this.innerHTML = "o";
	      this.setAttribute("class", "oClick");
	      // checkForWin('o');
	   	}
	    clickNumber ++;
	    console.log(clickNumber);
	 });
	
	$('#reset').find('button').on('click', function() {
		$('td').removeClass('xClick oClick').addClass('blankState').html("");
		clickNumber = 0;
	});

});


// var xArray = [];
// var oArray = [];

// var checkForWin = function(player);	
// if xArray === [1,2,3] || [4,5,6] || [7,8,9] || [1,4,7] || [2,5,8] || [3,6,9] || [1,5,9] || [3,5,7] {
// 		alert("Success")
// 	}


// ok // - A user should see a 3x3 grid for the tic-tac-toe board
// ok // A user should be able to click on different squares to make a move
// ok // Every click will mark the letter `X` or `O` (does not need to alternate)
// ok // Upon marking of an individual cell, use JavaScript to add a class to
//  	each cell to display a color (either background or text--both is better)
// ok // A user should be able to click a reset button that will clear the contents of the board


