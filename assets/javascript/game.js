var winCounter = 0;
var dashLetters = "";
var lettersGuessed="";
var userChoice="";
var wordBank = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "galaxy", "nebula", "spaceship", "sun", "asteroid", "comet"];
var randomNumber=Math.floor(Math.random()*14+1);
var letterChoices = {};
var numberTries = 0;

dashLetters = [];

selectedWord = wordBank[randomNumber];

for(i=0;i<selectedWord.length;i++){

	letterChoices[i+1] = selectedWord[i];

	dashLetters.push(" _ ");

	

}


document.getElementById("dash-letter").innerHTML = dashLetters;


document.onkeyup = function(event) {

    userChoice = event.key;
 
   	for(i=0;i<selectedWord.length;i++){

    	if(userChoice === letterChoices[i+1]){
    		alert("good choice");

			dashLetters[i] = userChoice;

    	}

    	
   	}

   	document.getElementById("dash-letter").innerHTML = dashLetters;

};
//create an onkey event gets selected key
//if selected key = letterChoices elements (for loop is needed)
//return index for that element
//goes to dashesShown and replaces dash elememnt with letter in that index

//if selected key !== letterChoices elements (for loop is needed)
//append innerhtml to letters-guessed
//guessCount++;
//if guessCount > selectedWord.length you lose

//if dashesShown==letterChoices win++
//get innerhtml and update win-counter
