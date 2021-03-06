console.log("JS is linked");
var $buttons = $('#buttons');
var currentLetter;
var chosenPlayer;
var countLoses = 0;
var numCorrect = 0;
var randomWord;
// var chooseCharacter;

var images = {
	'AV-1': {
		gallows: [
		'code/jpegs/Gallows/gallows_update.png', 'code/jpegs/Gallows/gallowsWitch_1.png',
		'code/jpegs/Gallows/gallowsWitch_2.png', 'code/jpegs/Gallows/gallowsWitch_3.png', 
		'code/jpegs/Gallows/gallowsWitch_4.png', 'code/jpegs/Gallows/gallowsWitch_5.png',
		'code/jpegs/Gallows/gallowsWitch_6.png'
		],
		avatar: [
		'code/jpegs/Witch/witchWhole_1.png', 'code/jpegs/Witch/witch_2.png',
		'code/jpegs/Witch/witch_3.png', 'code/jpegs/Witch/witch_4.png',
		'code/jpegs/Witch/witch_5.png', 'code/jpegs/Witch/witch_6.png',
		'code/jpegs/Skeleton/skel_blank.png'
		]
	},
	'AV-2': {
		gallows: [
		'code/jpegs/Gallows/gallows_update.png', 'code/jpegs/Gallows/gallowsDevil_1.png',
		'code/jpegs/Gallows/gallowsDevil_2.png', 'code/jpegs/Gallows/gallowsDevil_3.png', 
		'code/jpegs/Gallows/gallowsDevil_4.png', 'code/jpegs/Gallows/gallowsDevil_5.png',
		'code/jpegs/Gallows/gallowsDevil_6.png'
		],
		avatar: [
		'code/jpegs/Devil/devilWhole_1.png', 'code/jpegs/Devil/devil_2.png',
		'code/jpegs/Devil/devil_3.png', 'code/jpegs/Devil/devil_4.png',
		'code/jpegs/Devil/devil_5.png', 'code/jpegs/Devil/devil_6.png',
		'code/jpegs/Skeleton/skel_blank.png'
		]
	},
	'AV-3': {
		gallows: [
		'code/jpegs/Gallows/gallows_update.png', 'code/jpegs/Gallows/gallowsSkel_1.png',
		'code/jpegs/Gallows/gallowsSkel_2.png', 'code/jpegs/Gallows/gallowsSkel_3.png', 
		'code/jpegs/Gallows/gallowsSkel_4.png', 'code/jpegs/Gallows/gallowsSkel_5.png',
		'code/jpegs/Gallows/gallowsSkel_6.png'
		],
		avatar: [
		'code/jpegs/Skeleton/skelWhole_1.png', 'code/jpegs/Skeleton/skel_2.png',
		'code/jpegs/Skeleton/skel_3.5.png', 'code/jpegs/Skeleton/skel_4.5.png',
		'code/jpegs/Skeleton/skel_5.5.png', 'code/jpegs/Skeleton/skel_6.5.png',
		'code/jpegs/Skeleton/skel_blank.png'
		]
	}
};



$('.avatar').click(function(event){
	chosenPlayer = $(event.target).attr('id');
	$('#selectPage').hide();
	$('#gamePage').removeClass('hidden');
	displayButtons();
	chooseWord();
	blanksFromAnswer();

	hangman();
	});

var wordBank = ["halloween", "ghost", "spectre", "witch", "candycorn", 
"vampire", "haunted", "gravestone", "hellraiser", "candyman", 
"werewolf", "pennywise", "ghostyacht", "poltergeist", "devil", 
"evil", "elvira", "mummy", "blood", "guts", "pumpkin", "costume",
"belalugosi", "moon", "blackcat", "bewitched", "spell", "horror",
"scream", "gore", "boobies", "warlock", "slenderman", "macabre", 
"monster", "beast"]

function chooseWord() {
	randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; 
	console.log(randomWord);
}

function blanksFromAnswer() {
	for(var i = 0; i < randomWord.length; i++) {
		$('#guessWord').append($('<span>').html('_').addClass('blanks'));
	}
}

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//create alphabet ul
var displayButtons = function() {
	var letter;
	for(var i = 0; i < alphabet.length; i++) {
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
	hangman();
})

function checkLetter() {
	var letterIsFound = false;
	for(var i = 0; i < randomWord.length; i++) {
		if(currentLetter.toLowerCase() === randomWord.charAt(i)) {
			displayLetters(i);
			letterIsFound = true;
			numCorrect++;
			console.log('numCorrect', numCorrect);
		}
	} 
	if (!letterIsFound) {
		countLoses++;
		console.log(countLoses);
	}	
}

function hangman() {
	$('#gallows').attr("src", images[chosenPlayer].gallows[countLoses]);
	$('#character').attr("src", images[chosenPlayer].avatar[countLoses]);
	if (countLoses === 6) {
		loseGame();	
	} else if (numCorrect === randomWord.length) {
		winGame();
		//handle winner
		console.log('winner');

	}
} 

function loseGame(){
	$('#loser').removeClass('.hidden').fadeIn(1000);
	$('#loser').css('display', "block");
	$('#playAgain').removeClass('.hidden').fadeIn(1000);
	$('#playAgain').css('display', "block");
	$('.rightColumn').hide();
	$('.leftColumn').hide();
	$('#guessWord').hide();
	$('#buttons').hide();
}

function winGame() {
	$('#winner').removeClass('.hidden').fadeIn(1000);
	$('#winner').css('display', "block");
	$('#playAgain').removeClass('.hidden').fadeIn(1000);
	$('#playAgain').css('display', "block");
	$('.rightColumn').hide();
	$('.leftColumn').hide();
	$('#guessWord').hide();
	$('#buttons').hide();

}

$('#playAgain').click(function() {
	location.reload(true);
});
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

