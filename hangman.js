var prompt = require('prompt');
var Word = require('./words');

console.log("Welcome to Car Hangman!!");
console.log("Guess Letters to fill in the word");
console.log("Guess them all right you win! Guess 8 letters wrong and you lose!");
prompt.start();

game = {
 wordbank = ['tessla', 'chevy', 'saab', 'honda', 'vovlo'],
 wins = 0,
 lose = 0,
 guessesL = [],
 guessesleft = 0,
 TheWord = null, 

  StartGame: function(wrd){
 	this.reset();
 	this.TheWord = new Word(this.wordbank[Math.floor(Math.random()* this.wordBank.length)]);
 	this.TheWord.getletters();
 	this.promptUser();
 },

 reset: function(){
 	this.guessesleft = 8;
 },

promptUser: function(){
    prompt.get(['guessLetter'], function(err, result){
      console.log("You guessed: " + result.Userguess);
      var manyGuessed = self.TheWord.check(result.Userguess);

      if(manyGuessed ==0) {
        console.log("WRONG");
        this.guessesleft--;
        
      } else {
        console.log("CORRECT");
          if(this.TheWord.rightWord()){
            console.log("You won!");
            console.log("-------------------");
            return;
          }
      }

      console.log("Guesses remaining: " + this.guessesleft);
      console.log("-------------------");
      if((this.guessesleft > 0) && (this.TheWord.Foundword == false)){
        this.promptUser();
      }
      else if(this.guessesleft == 0){
        console.log("Game over. Correct Word is", this.TheWord.picked);
      } else {
        console.log(this.TheWord.wordRender());
      }
    });

  }
};
game.StartGame();
