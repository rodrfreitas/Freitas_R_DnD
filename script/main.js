// Select your elements first - what is the user going to interact with

// this is a 1 to many connection to elements in the DOM
let navButtons = document.querySelectorAll('#buttonHolder img'),
	theHeadline = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelector('.puzzle-board');

// functions go in middle

function changeBGImage () {
	debugger;
	// object.property = "new value"
	// theHeadline.textContent = "Drag and Drop is fun!";
	// theHeadline.classList.add('orange-headline');

	// change the background image in the drop zone
	puzzleBoard.style.backgroundImage = "url('../images/backGround' + this.id + .jpg);

}


// event handling at the botton
// how is the user going to interact with the elements / controls you provide

// process a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener('click', changeBGImage));