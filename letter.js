//displays wheather the letter is right or not 
 
function Letter(ltr) {
  this.letter = ltr;
  this.appear = false; 
  this.displayL = function(){
    if(this.letter == ' '){
      this.appear = true;
      return ' ';
    } if(this.appear === false){
      return ' _ ';
    } else{
      return this.letter;
    }
  };
};
module.exports = Letter;