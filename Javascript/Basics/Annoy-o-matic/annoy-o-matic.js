//Ask the user
var userResponse = prompt("Are we there yet?");
var response1 = userResponse.indexOf ("yes");
var response2 = userResponse.indexOf ("yeah");

//Loop until i/p is "yes" or "yeah"
while (response1 === -1 && response2 === -1)
{
    var userResponse = prompt("Are we there yet?");
    var response1 = userResponse.indexOf ("yes");
    var response2 = userResponse.indexOf ("yeah");
}

//alert if i/p is "yes" or "yeah"
alert("Yay, we finally made it");