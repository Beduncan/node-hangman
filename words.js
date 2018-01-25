// bring in the letter.js file 
var Let = require('./letter.js');
function Word(picked) {
	this.picked = picked;
	this.letters = [];
	this.FoundWord = false;
	this.getLetter = function() {
		for (var i = 0; i < this.picked.length; i++) {
            var newLetter = new Let(this.picked[i]);
            this.letters.push(newLetter);
		}
	};
 
	//checks if user found right word 
	this.checkW = function () {
		if (this.letters.every(function (ltt){
			return ltt.appear === true;
		})){
			this.FoundWord = true;
			return true;
		}
	};
};	
//check if letter is in word 
Word.prototype.checkLetter = function(userguess){
	var returnthis = 0;
	//goes through each letter to see if it's correct
	this.letters.forEach(function (ltt){
		if (ltt.letter === userguess) {
			ltt.appear = true;
			returnthis++;
		}
	})
	//if letter matched
	return returnthis; 
};
Word.prototype.RenderWord = function(){
	var display = " ";
	//render based on letters found
	this.letters.forEach(function(ltt){
		var CurrentLetter = ltt.displayL();
		display += CurrentLetter; 
	})
	return display;
}

module.exports = Word;