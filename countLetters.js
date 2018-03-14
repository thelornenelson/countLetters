function countLetters(word){
  var letters = {};
  word = word.replace(/ /g, "");
  for(var i = 0; i < word.length; i++){
    if(letters[word.charAt(i)]){
      letters[word.charAt(i)]++;
    }
    else letters[word.charAt(i)] = 1;
  }
  return letters;
}

console.log(countLetters("lighthouse in the house"));
