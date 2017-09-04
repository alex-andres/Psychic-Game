//using this function so that this code will only run once the DOM has completely loaded.
$(document).ready(function(){
	//establishing an array for the random letter to be chosen from later
	var alphabet = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	//declaring an array where the User's guessed letters will be displayed later
	var arrayGuessedLetter = [];
	//declares variable for wins number to be stored, initializing it with a value of 0 
	var wins = 0;
	//declares variable for losses number to be stored, initializing it with a value of 0
	var losses = 0;
	//declares variable for total amount of guesses to be stored, initializing it with a value of 10, giving the user 10 chances to guess the correct letter
	var guessesLeft = 10;
	//declares a variable for the random letter that will store value of letterRandomizerFunction.
	var randomLetter;
	//function that produces a random choice from the array of words
	function letterRandomizerFunction() {
	  randomLetter = alphabet[Math.floor(Math.random() * 26)];
	};
	//function that displays the user input from the arrayGuessedLetter in the lettersGuessed element
	function lettersGuessedFunction() {
	  $("#lettersGuessed").html(arrayGuessedLetter.join(', '));
	};
	//function that displays the value from the guesses left variable in the guessesLeft element
	function guessesLeftFunction() {
	  $("#guessesLeft").html(guessesLeft);
	};
	//function that resets the value for guesses left, empties the arrayGuessedLetters array, and runs the contained functions
	function resetFunction() {
		letterRandomizerFunction();
		lettersGuessedFunction();
	  guessesLeftFunction();

	  guessesLeft = 10;
	  arrayGuessedLetter = [];
	}
	//calls each of the functions below
	letterRandomizerFunction();
	guessesLeftFunction();

	//function that receives user input and converts it from keycode to lower case alphabet
	$(document).keyup(function(e) {
	    //decreases the guessesLeft variable by 1 everytime a key is pressed
	    guessesLeft--;
	  //stores the input from user converted to lowercase letter in the variable called guess
	  var guess = String.fromCharCode(e.keyCode).toLowerCase();
	  //pushes each guess variable to an array call arrayGuessedLetter
	  arrayGuessedLetter.push(guess);
	  //calls each of the functions below
	  guessesLeftFunction();
	  lettersGuessedFunction();

	  			//creates a condition if the guessesLeft variable value is higher than 0
	        if (guessesLeft > 0){
	        		//if the guesses left is greater than 0 and the guess equals the randomLetter variable, then the wins variable is increased
	            if (guess === randomLetter){
	                wins++;
	                //wins element updated in html
										$("#wins").html(wins);
									//reset function is run to restart the game
	                resetFunction();
	            }
	        //if the guesses left is equal to 0 then the losses variable is increased by one    
	        }else if(guessesLeft === 0){
	            losses++;
	            	//losses element is updated in html
	            	$("#losses").html(losses);
	            //reset function is run to restart the game	
	            resetFunction();
	        }
	});
});

