// Logic to implement:

// Current word - if user presses key to begin game - generate random number to pick a word from the array - addEventListener
// Current image - if user presses key to begin - generate random number to pick an image from the array
    // LINK THE WORDS AND IMAGES

// Guesses remaining - if user guesses a letter and is incorrect - subtract 1 from 10 (total guesses)

// Letters guessed - if user guesses a letter and is incorrect - display that letter in this line

// Number of wins - if user completes a word before remaining guesses hits zero - add 1 from 0

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var artWords = ["abstract", "cubism", "deco", "impressionism", "nouveau", "pop", "surrealism"];

var guessRemaining = 9;

// Generate random word

var currentWord = artWords[Math.floor(Math.random() * artWords.length)];
var wordDisplay = document.querySelector("#wordDisplay");
wordDisplay.innerHTML = currentWord;