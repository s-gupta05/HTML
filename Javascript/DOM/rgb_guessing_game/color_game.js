var ind = 6;
var colors;
var pickedColor;
var difficulty = "hard";
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("msg");
var header = document.querySelector("h1");
var easy = document.getElementsByClassName("difficulty")[0];
var hard = document.getElementsByClassName("difficulty")[1];
var reset = document.getElementById("toggle");


hard.classList.add("selected");
setVars();


reset.addEventListener("onmouseover", function() {
		this.classList.add("selected");
	}
)

reset.addEventListener("onmouseout", function() {
		this.classList.remove("selected");
	}
)

reset.addEventListener("click", function() {
		if(difficulty==="easy")
		{
			easyDifficulty();
		}
		else if(difficulty==="hard")
		{
			hardDifficulty();
		}
	}
)

easy.addEventListener("click", easyDifficulty);

hard.addEventListener("click", hardDifficulty);

function easyDifficulty() {
	difficulty = "easy";
	easy.classList.add("selected");
	hard.classList.remove("selected");
	squares[3].style.display = "none";
	squares[4].style.display = "none";
	squares[5].style.display = "none";
	ind = 3;
	setVars();
	}

function hardDifficulty() {
	difficulty = "hard";
	hard.classList.add("selected");
	easy.classList.remove("selected");
	squares[3].style.display = "block";
	squares[4].style.display = "block";
	squares[5].style.display = "block";
	ind = 6;
	setVars();
	}

function setVars()
{
	msgDisplay.textContent = "";
	reset.textContent = "NEW COLORS";
	header.style.backgroundColor = "steelblue";
	colors = generateColorsArr(ind);
	pickedColor = colorPicker();
	colorDisplay.textContent = pickedColor;
	colorSquares();
}

function colorSquares()
{
	for(var i=0; i<squares.length; i++)
	{
		//Add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		
		//Add click listeners to squares
		squares[i].addEventListener("click", function() {
				//get the clicked color rgb
				var clickedColor = this.style.backgroundColor;
				//compare with picked Color rgb
				if(clickedColor === pickedColor)
				{
					reset.textContent = "PLAY AGAIN?";
					msgDisplay.textContent = "Correct!";
					changeColor(clickedColor);
					header.style.backgroundColor = clickedColor;
				}
				else
				{
					this.style.backgroundColor = "#232323";
					msgDisplay.textContent = "Try Again!";
				}
			}
		)
	}
}


function changeColor(color)
{
	for(var i=0; i<colors.length; i++)
	{
		squares[i].style.backgroundColor = color;
		
	}
}

function colorPicker()
{
	var winColor = Math.floor(Math.random() * colors.length);
	return colors[winColor];
}

function generateColorsArr(num)
{
	//make an arr
	var arr = [];
	//add random colors to array
	for(var i=0; i<num; i++)
	{
		//Red
		var red = Math.floor(Math.random() * 256);
		//Green
		var green = Math.floor(Math.random() * 256);
		//Blue
		var blue = Math.floor(Math.random() * 256);
		
		var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
		arr.push(rgb);
	}
	//return the array
	return arr; 
}

