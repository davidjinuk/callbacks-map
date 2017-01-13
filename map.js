// var words = ["ground", "control", "to", "major", "tom"];

// var wordsLength = words.map(function(word) {
//   return word.length;
// });
// console.log(wordsLength);


// var words = ["ground", "control", "to", "major", "tom"];



var words = ["ground", "control", "to", "major", "tom"];

function map (arr, cb) {
  var wordsArray = [];
  for(var i = 0; i < arr.length; i++) {
    wordsArray[i] = cb(arr[i]);
  }
  return wordsArray;
}


var result = map(words, function(word) {
  return word.length;
});
console.log(result);