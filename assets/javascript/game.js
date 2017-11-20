var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];


var choices = ["a", "b","c", "d","e", "f","g", "h","i", "j","k", "l","m", "n","o"
                ,"p", "q","r", "s","t", "u","v", "w","x", "y", "z"];
var computerGuesses = []; //this will hold the random letter chosen


window.onload = function() {      ‎
        var computerChooses = choices[Math.floor(Math.random()*choices.length)];
        computerGuesses.push(computerChooses);

};

        document.onkeyup = function(event) {
        var userKeys = event.key;
        guessesSoFar.push(userKeys);

        if ((userKeys == computerGuesses[0]) && (guessesLeft > 0)) {
                wins++;
                document.getElementById("wins").innerHTML = wins;
                guessesLeft = 10;
                guessesSoFar.length = 0;
                computerGuesses.length = 10;
                var computerChooses = choices[Math.floor(Math.random()*choices.length)];
                computerGuesses.push(computerChooses);

            }
        else if ((userKeys !== computerGuesses[0]) && (guessesLeft >0)){
            guessesLeft = guessesLeft -1;
            document.getElementById("guessesleft").innerHTML = " " + guessesLeft;
        }
        else {
            losses++
            document.getElementById("losses").innerHTML = losses;
         guessesLeft = 10;
                guessesSoFar.length = 0;
                computerGuesses.length = 10;
                var computerChooses =  choices[Math.floor(Math.random()*choices.length)];
                computerGuesses.push(computerChooses);

        }
            document.getElementById("guessessofar").innerHTML = " " + guessesSoFar;
};