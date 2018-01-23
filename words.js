// bring in the letter.js file 
var Let = require('./letter.js');
var t = this
function Word(picked) {
	t.picked = picked;
	t.letters = [];
	t.FoundWord = false;
	t.getletters = function(){
		for (var i = 0; i < t.picked.length; i++) {
			this.letters.push(new Letter(this.picked[i]));
		}
	};
}; 
//checks if user found right word 
Word.prototype.check = function () {
	if (t.letters.every(function (lett){
		return lett.appear = true;
	})){
		t.FoundWord = true;
		return true;
	}
};
//check if letter is in word 
Word.prototype.checkLetter = function(Userguess){
	var returnthis = 0;
	//goes through each letter to see if it's correct
	t.letters.foreach(function (lett){
		if (lett.letter === guessedLetter) {
			lett.appear = true;
			returnthis++
		}
	})
	//if letter matched
	return returnthis; 
};
Word.prototype.RenderWord = function(){
	var display = "";
	//render based on letters found
	t.letters.foreach(function(lett){
		var CurrentLetter = lett.display();
		display += CurrentLetter; 
	})
	return display;
}
module.exports = Word;