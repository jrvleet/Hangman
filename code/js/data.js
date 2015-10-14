console.log("JS is linked");

$('.avatar').click(function(event){
	$('#selectPage').hide();
	$('#gamePage').removeClass('hidden');
})

var wordBank = ["halloween", "ghost", "spectre", "witch", "candycorn", "vampire", "haunted", "gravestone"]
var randomWord;
function chooseWord() {
	randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]; 
	console.log(randomWord);
}

function blanksFromAnswer() {
	for(var i = 0; i < randomWord.length; i++) {
		$('#guessWord').html($('#guessWord').html() + "_ ");
	}
}


	$('#getWordButton').click(function(event){
		chooseWord();
		blanksFromAnswer();
	});


/* ********************  Model  *********************/

// 1. click avatar to choose your character and start the game
// 2. A word will be populated automatically
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

