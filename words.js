// 

var Let = require('./letter.js');

function Word(picked) {
	this.picked = picked;
	this.letters = [];
	this.Foundword = false;
	this.getletters = function(){
		for (var i = 0; i < this.picked.length; i++) {
			var newL = new Letter(this.picked[i]);
			this.letters.push(newL);
		}
	};
}; 
Word.prototype.rightWord = function() {
	this.Foundword = this.letters.every(function(currLett) {
        return currLett.appear;
    });
    return this.Foundword;
};
Word.prototype.check = function (Userguess) {
	var returncheck = 0;

	for (var i = 0; i < this.letters.length; i++){
		if(this.letters[i].key == Userguess){
			this.letters.appear = true;
			returncheck++;
		}
	}	
};
Word.prototype.wordRender = function(){
	var word = '';
	for(var i = 0; i < this.letters.length; i++){
		word += this.letters[i].pickLetter(); 
	}
	return word;
};

module.exports = Word;