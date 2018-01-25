//Words and letters for game
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var artWords = ["abstract", "cubism", "deco", "impressionism", "nouveau", "pop", "surrealism"];
var remainingLetters = artWords.length;

//Generate random word and split into characters
var artWord = artWords[Math.floor(Math.random() * artWords.length)];
var textArray = [];
for (var i = 0; i < artWord.length; i++) {
    textArray[i] = "_";
}
textArray.innerText = artWord;
console.log("Chosen word is", textArray);

//Letter placement

//keyup function
window.addEventListener("keyup", function (event) {
    var letterGuessed = function (event) {
        var userGuess = event.key;
        document.getElementById("userGuess").innerHTML = "The pressed key was: " + i;
        document.addEventListener("keyup", userGuess);
        console.log("User guessed", letterGuessed);


        //Variables for correct/incorrect letter
        var correctLetter = document.querySelector("#correctLetter");
        var incorrectLetter = document.querySelector("#incorrectLetter");

        //Placement of user's guess
        var render = function () {
            if (userGuess === textArray) {
                document.querySelector("#correctLetter").innerText = userGuess;
            }
            else {
                document.querySelector("#incorrectLetter").innerText = userGuess;
            }
        }
        render();

        document.addEventListener("keydown", textArray);

    }
})



// document.querySelector("#textArray");
//Number of wins
var numWins = document.querySelector("#numWins");
numWins.innerHTML = 0
console.log("Number of wins", numWins);
// var win = function () {
//     if(userGuess){
    // document.querySelector("#numWins").innerText = + 1;
        // win();
//     }
// }

//Display guesses remaining
var guessRemaining = document.querySelector("#guessRemaining");
guessRemaining.innerHTML = 9;
console.log("Remaning guesses", guessRemaining);
//     var lose = function(){
//         document.querySelector("#numWins").innerText = 0;
            // lose();
//     }