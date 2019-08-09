var scoreP1      = document.getElementById("p1");
var scoreP2      = document.getElementById("p2");
var btnPlyr1     = document.querySelector("#btnP1");
var btnPlyr2     = document.querySelector("#btnP2");
var btnReset     = document.querySelector("#btnRst");
var maxScore     = document.getElementById("maxx");
var inpMaxScore  = document.querySelector("input");
var scoreP1Var   = 0;
var scoreP2Var   = 0;
var gameOver     = false;
var winningScore = 5;


inpMaxScore.addEventListener("change",function() {
		reset();
		maxScore.textContent = inpMaxScore.value;
		winningScore = Number(maxScore.textContent);
		if (winningScore < 1)
		{
			inpMaxScore.value = null;
			reset();
			alert("Playing to cannot be less than 1")
		}
	}
)


	btnPlyr1.addEventListener("click", function() {
			if(!gameOver)
			{
				scoreP1Var++;
				scoreP1.textContent = scoreP1Var;
				if(scoreP1Var === winningScore)
				{
					scoreP1.style.color = "green";
					gameOver = true
				}
			}
		});

	btnPlyr2.addEventListener("click", function() {
			if(!gameOver)
		 	{
				scoreP2Var++;
				scoreP2.textContent = scoreP2Var;
				if(scoreP2Var === winningScore)
				{
					scoreP2.style.color = "green";
					gameOver = true
				}
			}
		});



btnReset.addEventListener("click", function() {
		inpMaxScore.value = null;
		reset();
	}
);


function reset()
{
	scoreP1.textContent = "0";
	scoreP1.style.color = "black";
	scoreP1Var = 0;
	scoreP2.textContent = "0";
	scoreP2.style.color = "black";
	scoreP2Var = 0;
	maxScore.textContent = "5";
	winningScore = 5;
	gameOver = false;
}
