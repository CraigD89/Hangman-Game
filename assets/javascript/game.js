// Logic to implement:

// Current word - if user presses key to begin game - generate random number to pick a word from the array - addEventListener
// Current image - if user presses key to begin - generate random number to pick an image from the array
    // LINK THE WORDS AND IMAGES

// Guesses remaining - if user guesses a letter and is incorrect - subtract 1 from 10 (total guesses)

// Letters guessed - if user guesses a letter and is incorrect - display that letter in this line

// Number of wins - if user completes a word before remaining guesses hits zero - add 1 from 0

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var artWords = ["abstract", "cubism", "deco", "impressionism", "nouveau", "pop", "surrealism"];

//Number of wins
var numWins = document.querySelector("#numWins");
numWins.innerHTML = 0
console.log("Number of wins", numWins);

//Display guesses remaining
var guessRemaining = document.querySelector("#guessRemaining");
guessRemaining.innerHTML = 9;
console.log("Remaning guesses", guessRemaining);

//Generate random word and split into characters
var artWord = artWords[Math.floor(Math.random() * artWords.length)];
var textArray = [];
for (var i = 0; i < artWord.length; i++) {
    textArray[i] = "_";
  }
console.log("Chosen word is", textArray);
// document.querySelector("#textArray");


//Display letters guessed (correct or incorrect)
var letterGuessed = document.querySelector("#letterGuessed");
// var lettersMatched = document.querySelector("#lettersMatched");
// var lettersIncorrect = document.querySelector("#lettersIncorrect");
// letterMatched.innerHTML = "_ _ _ _ _ _";
// letterIncorrect.innerHTML = "_ _ _ _ _ _";


//User's guess
// var userGuess = keyup
// document.addEventListener("keyup", userGuess);
// if (userGuess === chosenLetter){
//     alphabet.push("");
// }
// else{
//     alphabet.push("")
// }



// var keyup = function(){
// }