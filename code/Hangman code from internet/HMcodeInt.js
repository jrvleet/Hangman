window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Cities";
    }
  }

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  
   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    categories = [
        ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
        ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
        ["manchester", "milan", "madrid", "amsterdam", "prague"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
  // Hint

    hint.onclick = function() {

      hints = [
        ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
        ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
        ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}

// NEW CODE

<center>
<table border=8 bgcolor=white width=60% cellspacing=0>
<tr><td>
<center>
<h2>Hangman!</h2><br>
<b><h3><font color=red>Topic:</font>
Presidents of The United States</h3></b>
<hr><br>

<SCRIPT LANGUAGE="JavaScript">

<!-- Original:  Rick Glusick -->



<!-- Begin
function getCookie (name) {
var dcookie = document.cookie;
var cname = name + "=";
var clen = dcookie.length;
var cbegin = 0;
while (cbegin < clen) {
var vbegin = cbegin + cname.length;
if (dcookie.substring(cbegin, vbegin) == cname) {
var vend = dcookie.indexOf (";", vbegin);
if (vend == -1) vend = clen;
return unescape(dcookie.substring(vbegin, vend));
}
cbegin = dcookie.indexOf(" ", cbegin) + 1;
if (cbegin == 0) break;
}
return null;
}
function setCookie (name, value, expires) {
if (!expires) expires = new Date();
document.cookie = name + "=" + escape (value) + "; expires=" + expires.toGMTString() +  "; path=/";
}
function delCookie (name) {
var expireNow = new Date();
document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT" +  "; path=/";
}
var Alphabet = new initAlphaArray()
var NumOfWords = 42;
var SaveData = "";
var ImageNum = "";
var LettersSelected = "";
var RandomWord = "";
var DisplayWord = "";
var position = 0;
var word = new WordList();
var expdate = new Date();
var RandomNumber = (expdate.getSeconds())%NumOfWords;
function initAlphaArray() {
this.length = 26
this[0] = "A"
this[1] = "B"
this[2] = "C"
this[3] = "D"
this[4] = "E"
this[5] = "F"
this[6] = "G"
this[7] = "H"
this[8] = "I"
this[9] = "J"
this[10] = "K"
this[11] = "L"
this[12] = "M"
this[13] = "N"
this[14] = "O"
this[15] = "P"
this[16] = "Q"
this[17] = "R"
this[18] = "S"
this[19] = "T"
this[20] = "U"
this[21] = "V"
this[22] = "W"
this[23] = "X"
this[24] = "Y"
this[25] = "Z"
}
function WordList() {
this.length = NumOfWords;
this[0] = "GEORGE WASHINGTON";
this[1] = "JOHN ADAMS";
this[2] = "THOMAS JEFFERSON";
this[3] = "JAMES MADISON";
this[4] = "JAMES MONROE";
this[5] = "JOHN QUINCY ADAMS";
this[6] = "ANDREW JACKSON";
this[7] = "MARTIN VAN BUREN";
this[8] = "WILLIAM HENRY HARRISON";
this[9] = "JOHN TYLER";
this[10] = "JAMES POLK";
this[11] = "ZACHARY TAYLOR";
this[12] = "MILLARD FILLMORE";
this[13] = "FRANKLIN PIERCE";
this[14] = "JAMES BUCHANAN";
this[15] = "ABRAHAM LINCOLN";
this[16] = "ANDREW JOHNSON";
this[17] = "ULYSSES GRANT";
this[18] = "RUTHERFORD HAYES";
this[19] = "JAMES GARFIELD";
this[20] = "CHESTER ARTHUR";
this[21] = "GROVER CLEVELAND";
this[22] = "BENJAMIN HARRISON";
this[23] = "GROVER CLEVELAND";
this[24] = "WILLIAM MCKINLEY";
this[25] = "THEODORE ROOSEVELT";
this[26] = "WILLIAM HOWARD TAFT";
this[27] = "WOODROW WILSON";
this[28] = "WARREN HARDING";
this[29] = "CALVIN COOLIDGE";
this[30] = "HERBERT HOOVER";
this[31] = "FRANKLIN ROOSEVELT";
this[32] = "HARRY TRUMAN";
this[33] = "DWIGHT EISENHOWER";
this[34] = "JOHN KENNEDY";
this[35] = "LYNDON JOHNSON";
this[36] = "RICHARD NIXON";
this[37] = "GERALD FORD";
this[38] = "JIMMY CARTER";
this[39] = "RONALD REAGAN";
this[40] = "GEORGE BUSH";
this[41] = "BILL CLINTON";
}



function availableLetters(i) {
if (LettersSelected.charAt(i)==Alphabet[i])
document.write('<TD ALIGN=CENTER VALIGN=CENTER WIDTH=20 HEIGHT=12>' +
'<B><A HREF="javascript:LoadNextPage('+i+',\''+Alphabet[i]+
'\')">'+Alphabet[i]+'</A></B></TD>');
else
document.write('<TD ALIGN=CENTER VALIGN=CENTER WIDTH=20 HEIGHT=12> </TD>');
}




function LoadNextPage(selected,letter) {
var j=0;
var HoldLettersSelected = LettersSelected;
LettersSelected = "";
if (selected == 0) {
for (j=1; j<=25; j++) {
LettersSelected += HoldLettersSelected.charAt(j);
}
LettersSelected = "^" + LettersSelected;
}
else if (selected == 25) {
for (j=0; j<=24; j++) {
LettersSelected += HoldLettersSelected.charAt(j);
}
LettersSelected += "^";
}
else {
for (j=0; j<selected; j++)
{
LettersSelected += HoldLettersSelected.charAt(j);
}
LettersSelected += "^";
for (j=selected+1; j<=25; j++) {
LettersSelected += HoldLettersSelected.charAt(j);
   }
}


SaveData = ImageNum + LettersSelected + RandomWord + "*";
setCookie("_HangMan", SaveData, expdate);
history.go(0);
}

// Sets a cookie that will expire in 10 days

expdate.setTime (expdate.getTime() + (1000*60*60*24*10));
if(getCookie("_HangMan") == null)
{
ImageNum = "A";
LettersSelected = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
RandomWord = word[RandomNumber];
SaveData = ImageNum + LettersSelected + RandomWord + "*";
setCookie("_HangMan", SaveData, expdate);
}
else {
SaveData = getCookie("_HangMan");
ImageNum = SaveData.charAt(0);
for (position=1; position<=26; position++) {
LettersSelected += SaveData.charAt(position);
}
for (position=27; position<SaveData.indexOf("*"); position++) {
RandomWord += SaveData.charAt(position);
   }
}
DisplayWord = "";
for (i=0; i<RandomWord.length; i++) {
if (RandomWord.charAt(i) == ' ') {
DisplayWord += " ";
}
else {
MatchFound = false;
for (j=0; j<=25; j++) {
if ((LettersSelected.charAt(j) == "^") && (RandomWord.charAt(i) == Alphabet[j])) {
DisplayWord += RandomWord.charAt(i);
MatchFound = true;
   }
}
if (!MatchFound) DisplayWord += "-";
   }
}
if (ImageNum == "J") {
document.write('<font color=red size=4>You Lost!<br>Answer:  "' + RandomWord + '"</font>');
}
else if (RandomWord == DisplayWord) {
document.write('<font color=red size=8>You Win!</font>');
}
else {
document.write('<table>');
document.write('<tr>');
for (i=0; i<13; i++) availableLetters(i);
document.write('</tr>');
document.write('<tr>');
for (i=13; i<26; i++) availableLetters(i);
document.write('</tr>');
document.write('</table>');
}
document.write('<br>');
document.write('<br>');
document.write('<font size=9><tt>');
document.write(DisplayWord);
document.write('</tt></font>');
document.write('<form>');
document.write('<input type="button" VALUE="New Game"'+
'onClick="delCookie(\'_HangMan\');history.go(0);">');
document.write('</form>');
document.write('</center>');
// End -->
</SCRIPT>
</td></tr>
</table>
</center>


