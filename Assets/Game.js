//create var array of Superheroes
var superHeroArray = [
"Ant-Man",  "Aquaman", "The Atom", "The Avengers", "Batgirl", "Batman", "Batwoman", "Black Canary", "Black Panther", "Captain America", "Catwoman", "Conan the Barbarian", "Daredevil", "The Defenders", "Doc Savage", "Doctor Strange", "Elektra", "Fantastic Four", "Ghost Rider", "Green Arrow", "Green Lantern", "Guardians of the Galaxy", "Hawkeye", "Hellboy", "Incredible Hulk", "Iron Fist", "Iron Man", "Marvelman", "Robin", "The Rocketeer", "The Shadow", "Spider-Man", "Sub-Mariner", "Supergirl", "Superman", "Teenage Mutant Ninja Turtles", "The Wasp", "Watchmen", "Wolverine", "Wonder Woman", "X-Men", "Zatanna", "Zatara"
];

//var to hold html/dom elements for reference


//CREATE GAME BOARD
// on (any) intial key click create code that assigns a random word  in the array and returns as a string
  function chooseWord() { 
    var txt= superHeroArray[Math.floor(Math.random() * superHeroArray.length)]; 
    var splitTxt = txt.split(""); 
    return splitTxt;
  }

//code to split the word selected from array into a sub-array 

    var letters=chooseWord();

    console.log (letters);

          // Split in characters

//create an underscore for each value except that space shall not have an underscore but just be a space and shall be ignored.

      // 1.A  for-loop to iterate through the letters array.
      for (var i = 0; i < letters.length; i++) {

     
        // 2. Create a variable named "letterSlot" 
        var letterSlot = $("<button>");

       

        // 4. Then give each "letterSlot" a data-attribute called "data-letter".
        letterSlot.attr("data-letter", letters[i]);

        // 5. Then give each "letterSlots" a text equal to "letters[i]".
        if (letters[i]=== " ") {
       letterSlot.text("  ")
        }
        else if(letters[i]=== "-") {
          letterSlot.text("-")
        }
        else {
          letterSlot.text("_")
        };

        // 6. Finally, append each "letterSlot" to the "#wordGameContainer" div (provided).
     $("#wordGameContainer").append(letterSlot);
      }

//if a keystroke value matches data-letter anywhere in the word then fill in that blank with that letter.

function matchLetter (event) {
  var chosenLetter = event.key;
  var found = false;
  for (var i = 0; i < letters.length; i++) {
    if (chosenLetter==letters[i]){
      change_ToValue(letters[i]);
      found = true;
    }
    }
 console.log (chosenLetter);
 if (!found){
   guessRem=guessRem-1;
   console.log (guessRem)
 }
} 



function change_ToValue (revealLtr) {
  var matchingButtons = $("[data-letter='" + revealLtr + "']");
 // console.log(matchingButtons);
  for (var i = 0; i<matchingButtons.length; i++){
   matchingButtons[i].textContent=revealLtr;
    }

  


}
document.onkeyup = matchLetter;     
// //KEEP SCORE
// // var to keep score
var heroPoints = 0;

// // var to keep track of remaining guesses
var guessRem = 7;

// //create function to decrease "guessRem" by 1 every time a wrong guess is made

// if {guessRem=guessRem-1



// }
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
 
// //reset game funcion
// function resetGame() {
  // reset game variables
  // heroPoints = 0
  // guessRem = 7
  // $("#wordGameContainer").empty();