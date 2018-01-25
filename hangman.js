var prompt = require('prompt');
var inquirer = require('inquirer');
//this is another npm package that runs a check to see if a valve is a letter or not
var npmletter = require("is-letter")

//pulls in word.js for the contrctor and the array of words in Wordarray
var Word = require('./words.js');
var Wordarray = require("./Wordarray.js");

//gobal vars
var wordBank = Wordarray.thewords.gameWords;
var guessesleft = 8;
var lettersguessed = [];
var currentWord;

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
      type: "confirm",
      message: "Are you sure:",
      name: "game",
      default: true

	}
	]).then(function (answer){
 		if(answer.game){
 			console.log('');
 			console.log("You'll Have 8 Guesses");
 			console.log("Good Luck");
 			ResetGame();
 		}else{
 			console.log("bye-bye");
 		}

	});
 		
};
function ResetGame(){
	if (guessesleft === 8) {
		console.log("-----------------------");

		//random number genterater 
		var random = Math.floor(Math.random() * wordBank.length)
        currentWord = new Word(wordBank[random]);
        currentWord.getLetter();
        //display word as _
        console.log(' ');
        console.log(currentWord.RenderWord());
        console.log(' ');
        PromptU();
 	} else {
 		Resetguessesleft();
 		ResetGame();
 	}
};

function Resetguessleft(){
	guessesleft = 10;
}
function PromptU(){
	inquirer.prompt([
		{
			name: "choseletter",
			type: "input",
			message: "Choose A Letter",
			validate: function(val){
					if(npmletter(val)){
						return true;
					}else{
						return false;
					}
				}
		}
	]).then(function(ltr){
		//storing users guess as lowercase
		var lettReturned = (ltr.choseletter).toUpperCase();
		//making sure the letter is new 
		var Alreadyguessed = false;
		//for loop over the letters that havve been guessed
		for(var i = 0; i < lettersguessed.length; i++){
			//if letter has been chosen aleady
			if(lettReturned === lettersguessed[i]){
				Alreadyguessed = true;
			}
		};

		// run this if i hasnt been chosen
		if (Alreadyguessed === false) {
			lettersguessed.push(lettReturned);
			//checking if letter is in word 
			var inWord = currentWord.checkLetter(lettReturned);

			if(inWord === 0) {
				console.log("Nope! you wrong!");
				guessesleft--;
				console.log("guesses left = " + guessesleft);
				console.log(currentWord.RenderWord())
				console.log("-----------------------");
				console.log("letters you have guessed: " + lettersguessed);
			}else{
				console.log("You Got Lucky!");
				if (currentWord.checkW() === true) {
					console.log(currentWord.RenderWord());
					console.log("-----------------------");
					console.log("You win")
				} else {
					console.log("guesses left = " + guessesleft);
					console.log("-----------------------");
					console.log(currentWord.RenderWord())
					console.log("-----------------------");
					console.log("letters you have guessed: " + lettersguessed);

				}
			}	
			//if word isnt found
			if(guessesleft > 0 && currentWord.FoundWord === false){
				PromptU();
			}else if(guessesleft === 0){
				console.log("--- Game Over ---");
				console.log("Correct word Was: " + currentWord.picked);
			};
		}else{//run this if letter has been chosen
			console.log("You've Already Gueesed: " + lettReturned);
			console.log("Try Agian");
			PromptU();
		};
	});
}