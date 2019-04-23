//Function 1: Check if the number is even
function isEven(x)
{
   if (x % 2 === 0)
   {
      alert("True");
   }
   else
   {
      alert("False");
   }
}

//Function 2: Find out the factorial of a number
function factorial(x)
{
   var y = x;
   var factNum = 1;
   while (y >= 1)
   {
      factNum *= y;
      y--;
   }
   alert(x + "! is " + factNum);
}

//Function 3: Change Kebab Case to Snake Case
function kebabToSnake(x)
{
   var snakeStr = x;
   var strIndex = snakeStr.indexOf("-");
   if(strIndex === -1)
   {
      alert("The string is not Kebab Cased");
      return 0;
   }
   while (strIndex !== -1)
   {
      snakeStr = snakeStr.replace("-", "_");
      strIndex = snakeStr.indexOf("-");
   }
   alert(x + " is now " + snakeStr);
}

//Ask user to select the function
var funcNum = Number(prompt("Select the function # that you want to perform"));

//Perform function as per user input
while (funcNum !== 0)
{
   if (funcNum === 1)
   {
      var x = Number(prompt("Write a number to check if it is even"));
      isEven(x);
   }
   else if (funcNum === 2)
   {
      var x = Number(prompt("Write a number to find out its factorial"));
      factorial(x);
   }
   else if (funcNum === 3)
   {
      var x = prompt("Write down a Kebab Cased string to change it to Snake Cased string");
      kebabToSnake(x);
   }
   else
   {
      alert("You can choose only between 1 to 3");
   }
   
   var funcNum = Number(prompt("Select the function # that you want to perform"));
}

alert("You have exited!");


