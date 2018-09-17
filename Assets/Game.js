//create var array of Superheroes
var superHeroArray = [
"Ant-Man",  "Aquaman", "The Atom", "The Avengers", "Batgirl", "Batman", "Batwoman", "Black Canary", "Black Panther", "Captain America", "Catwoman", "Conan the Barbarian", "Daredevil", "The Defenders", "Doc Savage", "Doctor Strange", "Elektra", "Fantastic Four", "Ghost Rider", "Green Arrow", "Green Lantern", "Guardians of the Galaxy", "Hawkeye", "Hellboy", "Incredible Hulk", "Iron Fist", "Iron Man", "Marvelman", "Robin", "The Rocketeer", "The Shadow", "Spider-Man", "Sub-Mariner", "Supergirl", "Superman", "Teenage Mutant Ninja Turtles", "The Wasp", "Watchmen", "Wolverine", "Wonder Woman", "X-Men", "Zatanna", "Zatara"
];


// //KEEP SCORE
// // var to keep score
var heroPoints = 0;

// // var to keep track of remaining guesses
var guessRem = 7;

// var to show acceptable keys

document.getElementById("guessRmHTML").innerHTML = guessRem
document.getElementById("heroPointsHTML").innerHTML = heroPoints


//CREATE GAME BOARD
// on (any) intial key click create code that assigns a random word  in the array and returns as a string
  function chooseWord() { 
    var txt= superHeroArray[Math.floor(Math.random() * superHeroArray.length)]; 
    var splitTxt = txt.split(""); 
    return splitTxt;
  }

//code to split the word selected from array into a sub-array 

    var letters=chooseWord();
    var matchableLetters=letters.length

    console.log (letters);

          // Split in characters

//create an underscore for each value except that space shall not have an underscore but just be a space and shall be ignored. Hyphens get automatically placed like wheel of fortune.

      // 1.A  for-loop to iterate through the letters array.
      for (var i = 0; i < letters.length; i++) {

     
        // 2. Create a variable named "letterSlot" (Just like fridge game)
        var letterSlot = $("<button>");

       

        // 4. Then give each "letterSlot" a data-attribute called "data-letter".
        letterSlot.attr("data-letter", letters[i]);

        // 5. Then give each "letterSlots" a text equal to "letters[i]".
        if (letters[i]=== " ") {
       letterSlot.text("  ")
       matchableLetters=matchableLetters + 1
        }
        else if(letters[i]=== "-") {
          letterSlot.text("-")
          matchableLetters=matchableLetters + 1
        }
        else {
          letterSlot.text("_")
        };

        // 6. Finally, append each "letterSlot" to the "#wordGameContainer" div (provided).
     $("#wordGameContainer").append(letterSlot);
      }

//if a keystroke value matches data-letter anywhere in the word then fill in that blank with that letter.

function matchLetter (event) {
  var acceptableKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
// var wrongKey = acceptableKeys.includes(chosenLetter)
  var chosenLetter = event.key;
   var found = false;
  for (var i = 0; i < letters.length; i++) {
    if (chosenLetter.toUpperCase()==letters[i].toUpperCase()){
      change_ToValue(letters[i]);
      found = true;
    }
    }
 console.log (chosenLetter);
 if (!found && acceptableKeys.includes(chosenLetter.toUpperCase())){
  //
    guessRem=guessRem-1;
   console.log (guessRem)
   document.getElementById("guessRmHTML").innerHTML = guessRem
 }
 var alphaKey = acceptableKeys.includes(chosenLetter.toUpperCase());
if (!alphaKey){
alert("This is not Martian--you only need A-Z!")
}
// var blank =  letterSlot.text("_")

  //show Bootstrap alert called youWon  

// }
// if (!blank) {resetGame}
} 


// //create function to decrease "guessRem" by 1 every time a wrong guess is made
function change_ToValue (revealLtr) {
  var matchingButtons = $("[data-letter='" + revealLtr + "']");
 console.log(matchingButtons);
  for (var i = 0; i<matchingButtons.length; i++){
   matchingButtons[i].textContent=revealLtr;
  // if revealLtr.data-lettr !=== _ {
  //    heroPoints= heroPoints + 1
  //    console.log (heroPoints)
  //    document.getElementById("heroPointsHTML").innerHTML = heroPoints
  // }
   }
    }


document.onkeyup = matchLetter   




// // function to calculate score
// function if full word is matchMedia, calcScore(heropoints++)
// //print score function
// function printScore("heroPoints"){}

// //when first showing array, show all letters as _ and space as space
// var letterSlot = $("<div>");
// //choose letter

// //match letter against each element of array

// //if match, show textvalue of array at array value (see fridge game)
// correctLetter.text($(this).attr("data-letter"));
// //when entire array matches, print a hoity toity supehero attaboy and restart game. 

// //code that checks letter chosen against each sub-array value and if that value is === then prints that letter to its respective index.


// ]
//  if //all letters are properly filled in
//    {
//       alert{"You got this one, you're an aweseome superhero geek. With great power comes great responsibility, do another one. "}


 

// //randomly choose array value
 
//reset game funcion
// function resetGame() {
//   // reset game variables
//   heroPoints = 0
//   guessRem = 7
//   $("#wordGameContainer").empty();