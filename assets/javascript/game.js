var winCounter = 0;
var dashLetters;
var lettersGuessed;
var wordBank;

wordBank = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto", "galaxy", "nebula", "spaceship", "sun", "asteroid", "comet"];

var randomNumber=Math.floor(Math.random()*14+1);

selectedWord = wordBank[randomNumber];

var letterChoices = function(){
	for(i=0;i<selectedWord.length;i++){
	//create a var letterChoices = objet where the index is position of each letter
	//and the elememt is each letter in the word
	//create a var dashesShown = object where the index is position of each letter
	//and the elememt is a dash and innerhtML for dash-letter is rewritten
	//return letterChoices
	//return that innerhtml?
}

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
