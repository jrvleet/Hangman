console.log("JS is linked");
var $buttons = $('#buttons');
var currentLetter;
var chosenPlayer;
var countLoses = 0;
var chooseCharacter;


$('.avatar').click(function(event){
	chosenPlayer = $(event.target).removeClass('avatar');
	$('#selectPage').hide();
	$('#gamePage').removeClass('hidden');
	displayButtons();
	$('.rightColumn').append(chosenPlayer);
	if(chosenPlayer.attr("id")==="AV-1") {
		chooseCharacter === "witch";
	} else if (chosenPlayer.attr("id")==="AV-2") {
		chooseCharacter === "devil";
	} else if ( chosenPlayer.attr("id")==="AV-3") {
		chooseCharacter === "skeleton";
	}
});

var wordBank = ["halloween", "ghost", "spectre", "witch", "candycorn", 
	"vampire", "haunted", "gravestone", "hellraiser", "candyman", 
	"werewolf", "pennywise", "ghostyacht", "poltergeist", "devil", 
	"evil", "elvira", "mummy", "blood", "guts", "pumpkin", "costume",
	 "belalugosi", "moon", "blackcat", "bewitched", "spell", "horror",
	 "scream", "gore", "boobies", "warlock", "slenderman", "macabre", 
	 "monster"]

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
	var letterIsFound = false;
	for(var i = 0; i < randomWord.length; i++) {
	 	if(currentLetter.toLowerCase() === randomWord.charAt(i)) {
	 		displayLetters(i);
	 		letterIsFound = true;
	 		//console.log("they are the same letter");
	 	}
	} 
	if (letterIsFound != true) {
	 		countLoses++;
	 		console.log(countLoses);
	 		hangman();
	 }	
}

function hangman() {
	if (chooseCharacter === "witch") {
		switch(countLoses) {
			case 1: 
				$('#gallows').attr("src", "/jpegs/Gallows/gallowsSkel_1.png");
				$('#AV-3').attr("src", "/jpegs/Skeleton/skel_2.png");

			break;
			case 2:
				$('#gallows').attr("src", "/jpegs/Gallows/gallowsSkel_2.png");
				$('#AV-3').attr("src", "/jpegs/Skeleton/skel_3.5.png");

			break;
			case 3:
				$('#gallows').attr("src", "/jpegs/Gallows/gallowsSkel_3.png");
				$('#AV-3').attr("src", "/jpegs/Skeleton/skel_4.5.png");

			break;
			case 4:
				$('#gallows').attr("src", "/jpegs/Gallows/gallowsSkel_4.png");
				$('#AV-3').attr("src", "/jpegs/Skeleton/skel_5.5.png");

			break;
			case 5:
				$('#gallows').attr("src", "/jpegs/Gallows/gallowsSkel_5.png");
				$('#AV-3').attr("src", "/jpegs/Skeleton/skel_6.5.png");
			break;

			case 6:
				$('#gallows').attr("src", "/jpegs/Gallows/gallowsSkel_6.png");
				$('#AV-3').attr("src", "/jpegs/Skeleton/skel_blank.png");
		}
	
	}
} else

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

