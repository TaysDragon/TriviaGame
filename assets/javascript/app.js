console.log("connected");

// DECLARING GLOBAL VARIABLES
// Grabbing displays
var correct = document.getElementById("correct");
console.log(correct);

var incorrect = document.getElementById("incorrect");
console.log(incorrect);

var timeRemaining = document.getElementById("timeRemaining");


// THIS IS JUST A VARIABLE
var scoreCounter = 0;

//Questions array
	var questions=["This country is one of the largest wine-producing countries of the world, where wine is grown in every region of the country. Which country is this?", "What is the name for the type of art portrait that deliberately exaggerates a person?", "Who was the first president of the United States?", "Who was the first president of the United States?"];

var answers1 =["France", "Italy", "Germany", "Australia",];
//       "corrrect" : "b"

var answers2=["Environmental", "Cartooning", "Caricature", "Tribal"];
       //"corrrect" : "c"

var answers3=["Abraham Lincoln","Ronald Reagan", "George Washington","Barack Obama is an idiot"];
//      "corrrect" : "c"

var answers4=["Abraham Lincoln","Ronald Reagan","George Washington","Barack Obama"];


// $.getJSON('js/questions1.json').done(function(data){
//         window.questionnaire = data;
//         console.log(window.questionnaire);
//         startGame();
//     });

// DECLARING MAIN CODE
function startGame() {
    correct.innerHTML = 0;
    incorrect.innerHTML = 0;
    unanswered.innerHTML =0;
    randomQuestion();
}

    //.innerHTML = randomQuestion;
    

startGame();
answers();

// var selectFruit = ["Apple", "Orange", "Banana", "Cherry"];
// var pickAFruit = function () {
// var todaysFruit = selectFruit[Math.floor(Math.random() * 4)];
// return todaysFruit;
// };

function randomQuestion(){
        document.getElementById("randomQuestion").innerHTML = questions[0];
}

function answers(){
  for (i = 0; i < 4; i++) {
    text += answers1[i];
document.getElementById("answers", "answers", "answers", "answers").innerHTML = text;
  }
}


//start timer
var count=30;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second


function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML= "Time remaining: " + count + " secs"; // watch for spelling
}

//compare answer
// determine if Mathif match inxwewmwn SCORE AND GOOD JOB
// IF WRONG OR TIMEOUT ADD TO INCORRECT AND NICE TRY, TRY AGAIN
// new game button


//

// function comparativeFunction(){
// 	if (scoreCounter === parseInt(randomQuestion) { 
// 		console.log("I won");
// 		correct.innerHTML++;
// 		console.log(correct);
// 		reset();
// 	}
// 	else if (scoreCounter > parseInt(randomQuestion) {
// 		console.log("I lost");
// 		incorrect.innerHTML++;
// 		console.log(incorrect);
// 		reset();
// 	}
// }


// function reset() {
//     randomQuestion.innerHTML = (randomQuestion);
//     userScore.innerHTML = 0;
//     scoreCounter = 0;
// }



// // Click event listener
// $(".crystal").on("click", function(){
// 	// console.log(this);
// 	console.log(this.value);
// 	console.log(parseInt(this.value));
// 	scoreCounter = scoreCounter + parseInt(this.value);
// 	comparativeFunction();
// })

