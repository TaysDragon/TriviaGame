// DECLARING GLOBAL VARIABLES
// Grabbing displays
var wins = document.getElementById("wins");
console.log(wins);

var losses = document.getElementById("losses");
console.log(losses);

var userScore = document.getElementById("userScore");
console.log(userScore);

var randomNumber = document.getElementById("randomNumber");
console.log(randomNumber);

// THIS IS JUST A VARIABLE
var scoreCounter = 0;

// Grabbing buttons
var ruby = document.getElementById("ruby");
console.log(ruby);

var sapphire = document.getElementById("sapphire");
console.log(sapphire);

var emerald = document.getElementById("emerald");
console.log(emerald);

var diamond = document.getElementById("diamond");
console.log(diamond);

// DECLARING GLOBAL FUNCTIONS
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function comparativeFunction(){
	if (scoreCounter === parseInt(randomNumber.innerHTML)) { 
		console.log("I won");
		wins.innerHTML++;
		console.log(wins);
		reset();
	}
	else if (scoreCounter > parseInt(randomNumber.innerHTML)) {
		console.log("I lost");
		losses.innerHTML++;
		console.log(losses);
		reset();
	}
}


function reset() {
    randomNumber.innerHTML = (getRandomValue(20, 120));
    ruby.value = getRandomValue(1, 12);
    sapphire.value = getRandomValue(1, 12);
    emerald.value = getRandomValue(1, 12);
    diamond.value = getRandomValue(1, 12);
    userScore.innerHTML = 0;
    scoreCounter = 0;
}



// Click event listener
$(".crystal").on("click", function(){
	// console.log(this);
	console.log(this.value);
	console.log(parseInt(this.value));
	scoreCounter = scoreCounter + parseInt(this.value);
	userScore.innerHTML = scoreCounter;
	comparativeFunction();
})

// DECLARING MAIN CODE
var startGame = function() {
    wins.innerHTML = 0;
    losses.innerHTML = 0;
    userScore.innerHTML = 0;
    randomNumber.innerHTML = (getRandomValue(20, 120));
    ruby.value = getRandomValue(1, 12);
    sapphire.value = getRandomValue(1, 12);
    emerald.value = getRandomValue(1, 12);
    diamond.value = getRandomValue(1, 12);
}

startGame();