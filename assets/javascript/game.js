// Logic to implement:

// Current word - generate random number to pick a word from the array - addEventListener
// Current image - generate random number to pick an image from the same array
// Guesses remaining - if user guesses a letter and is incorrect - subtract 1 from 9 (total guesses)
// Letters guessed - if user guesses a letter and is incorrect - display that letter in this line
// Number of wins - if user completes a word before remaining guesses hits zero - add 1 from 0

// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var artWords = ["abstract", "cubism", "deco", "impressionism", "nouveau", "pop", "surrealism"];
var remainingLetters = artWords.length;

// var letterGuessed = function (event) {
//     var userGuess = event.key;
//     document.addEventListener("keyup", userGuess);
//     console.log("User guessed", letterGuessed);
// }

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
for (var x = 0; x < artWord.length; x++) {
    textArray[x] = "_";
}
textArray.innerText = artWord;
console.log("Chosen word is", textArray);
// document.querySelector("#textArray");


//Display letters guessed (correct or incorrect)

var correctLetter = document.querySelector("#correctLetter");
var incorrectLetter = document.querySelector("#incorrectLetter");


var userGuess = function () {
document.addEventListener("keyup", userGuess);
console.log("User guessed ", userGuess);


    if (userGuess === textArray) {
        correctLetter.innerText = userInput;
        //ADD PUSH TO DOM
    }

    else {
        incorrectLetter.innerText = userInput;
        //ADD PUSH TO DOM
    }
}





// User's guess

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

var placeLetter = function (event) {
    var userGuess = event.key;
    var artWord = artWords[Math.floor(Math.random() * artWords.length)];
    var letterGuessed;

}