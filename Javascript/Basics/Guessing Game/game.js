//create secret no.
var secretNumber = 4;

//ask user to guess
var guess = Number(prompt("Guess a number"));

//validate the guess
if (guess === secretNumber)
{
   alert("Your guess is correct!");
}
   else if (guess > secretNumber)
   {
      alert("Your guess is too high!");
   }
   else
   {
      alert("Your guess is too low!");
   }