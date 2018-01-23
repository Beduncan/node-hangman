var prompt = require('prompt');
var inquirer = require('inquirer')
var Word = require('./words');


var wordBank = [
	'tessla', 'dodge', 'ferrari', 'porsche', 'fiat', 'mclaren'
];
var guessesleft = 8;
var lettersguessed = [];
var currentword;

startgame();

function startgame() {
	console.log("-----------------------");
	console.log("Welcome to The Car Brands Hangman game");
	console.log("-----------------------");
	console.log("Hit Enter to Play")
	console.log("-----------------------");
	console.log("Type Anything to Canel")
	console.log("-----------------------");

	//empty letters guessed array
	if(lettersguessed.length > 0){
		lettersguessed = [];
	}
	inquirer.prompt([
	{
		name: 'game',
		type: 'confrim',
		message: 'Wanna Play a Game',
	    default: true

	}
	]).then(function (answer){
 		if(answer.game){
 			console.log("You'll Have 8 Guesses");
 			console.log("Good Luck");
 			newGame();
 		}else{
 			console.log("bye-bye");
 		}

	});
 		
};
function ResetGame(){
	if (guessesleft === 8) {
		console.log("-----------------------");

		//random number genterater 
		var random = Math.floor(Math.random() * wordBank.letters)
        currentWord = new Word(wordBank[randNum])
        currentword.getletters();

        //display word as _
        console.log(currentword);

	}
};