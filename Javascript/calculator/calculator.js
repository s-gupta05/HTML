//Ask the user
function calc(calcType,num1,num2)
{
    function add(num1,num2)
    {
        var result = num1 + num2;
        alert("On adding " + num1 + " and " + num2 + " we get " + result);
    }

    function subtract(num1,num2)
    {
        if (num1 >= num2)
        {
            var result = num1 - num2;
        }
        else
        {
            var result = num2 - num1;
        }
        alert("On subtracting " + num1 + " and " + num2 + " we get " + result);
    }

    function multiply(num1,num2)
    {
        var result = num1 * num2;
        alert("On multiplying " + num1 + " and " + num2 + " we get " + result);
    }

    function divide(num1,num2)
    {
        if (num1 >= num2)
        {
            var num = num1 / num2;
            var result = num.toFixed(2);
        }
        else
        {
            var num = num2 / num1;
            var result = num.toFixed(2);
        }
        alert("On dividing " + num1 + " and " + num2 + " we get " + result);
    }
    
    if (calcType === "add" || calcType === "+")
    {
        add(num1,num2);
    }
    else if (calcType === "subtract" || calcType === "-")
    {
        subtract(num1,num2);
    }
    else if (calcType === "multiply" || calcType === "*")
    {
        multiply(num1,num2);
    }
    else if (calcType === "divide" || calcType === "/")
    {
        divide(num1,num2);
    }
    else
    {
        alert("Incorrect values passed. The calculator can only add, subtract, multiply or divide");
    }
}

var calcType = prompt("What type of evaluation you want?");
var num1 = Number(prompt("Write your first number"));
var num2 = Number(prompt("Write your second number"));
calc(calcType,num1,num2);
