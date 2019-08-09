var userAge = prompt("What is your Age?");
if (userAge < 0)
{
   alert("Age Cannot be in negative no.");
}
   else if (userAge == 21)
   {
      alert("Happy 21st birthday!!");
   }
   else if (userAge % 2 != 0)
   {
      alert("Your age is odd!");
   }
   else if (userAge % Math.sqrt(userAge) == 0)
   {
      alert("perfect square!");
   }