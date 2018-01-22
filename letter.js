//displays wheather the letter is right or not 
var t = this; 
function Letter(lett) {
  t.lett = lett;
  t.appear = false; 
};
Letter.prototype.display = function(){
  if(t.lett == ' '){
    t.appear = true;
    return ' ';
  }if(t.appear === false){
    return '_';
  }else{
    return t.lett
  }
};

module.exports = Letter;