console.log("JS is linked");
var $buttons = $('#buttons');
var currentLetter;


$('.avatar').click(function(event){
	$('#selectPage').hide();
	$('#gamePage').removeClass('hidden');
	displayButtons();
})

var wordBank = ["halloween", "ghost", "spectre", "witch", "candycorn", 
	"vampire", "haunted", "gravestone", "hellraiser", "candyman", 
	"werewolf", "pennywise"]

var randomWord;
function chooseWord() {
	randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; 
	console.log(randomWord);
}

function blanksFromAnswer() {
	for(var i = 0; i < randomWord.length; i++) {
		$('#guessWord').append($('<span>').html('_ ').addClass('blanks'));
	}
}

$('#getWordButton').click(function(event){
		chooseWord();
		blanksFromAnswer();
	});

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//create alphabet ul
var displayButtons = function() {
	var letter;
	for(var i = 0; i < alphabet.length; i++) {
		//letter = $('div').addClass('letters');
		//letter.html(alphabet[i]);
		letter = document.createElement('div');
		letter.innerHTML = alphabet[i];
		letter.className = 'letters';
		$buttons.append(letter);
	}
}

//pick a letter, test against letters in word
	$buttons.click(function(event) {
		currentLetter = $(event.target).html();
		checkLetter();
		console.log(currentLetter);
	})

function checkLetter() {
 for(var i = 0; i < randomWord.length; i++) {
 	if(currentLetter.toLowerCase() === randomWord.charAt(i)) {
 		displayLetters(i);
 		console.log("they are the same letter");
 	}
 }
}

//access nth-child of 'guessWord', change it currentLetter
function displayLetters(i) {
	$('.blanks:eq('+ i +')').html(currentLetter);
}


/* ********************  Model  *********************/

// 1. click avatar to choose your character and start the game (done)
// 2. press "get word" button (done)
// 3. select a letter from the letter table
// 4. selected letters turn a different color and cannot be clicked again
// 5. the selected letter will populate the guess word if it correct
// 6. if the selected letter is not in the word move a piece of the 
// 	  character to the gallows.

// bank of words
// randomize 
// yacht
// uselesscomix.com
// $('.guessWord').html

