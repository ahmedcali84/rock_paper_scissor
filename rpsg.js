const choice = ["rock", "paper", "scissor"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
	const i = Math.floor(Math.random() * (3 - 0) + 0)
	return choice[i];
}

function getHumanChoice(userChoice)
{
	userChoice = userChoice.toLowerCase();
	if(choice.includes(userChoice))
	{
		return userChoice;
	}
	else
	{
		throw new Error("Invalid Choice for the game");
	}
}

function playRound(computerSelection, humanSelection)
{
	const scoreLog = document.createElement('div');
	const tie = document.createElement('p');
	const computerLog = document.createElement('p');
	const humanLog = document.createElement('p');

	if(computerSelection === humanSelection)
	{
		tie.textContent = `It is A tie. Both chose ${computerSelection}`;
		scoreLog.appendChild(tie);
	}

	else if((computerSelection === "scissor" && humanSelection === "rock") || 
	(computerSelection === "paper" && humanSelection === "scissor") ||
	(computerSelection === "rock" && humanSelection === "paper")
	)
	{
		humanLog.textContent = `h:${humanSelection} beats c:${computerSelection}. You Win`;
		humanScore += 1;
		scoreLog.appendChild(humanLog);
	}
	else
	{
		computerLog.textContent = `c:${computerSelection} beats h:${humanSelection}. You Lose`;
		computerScore += 1;
		scoreLog.appendChild(computerLog);
	}
	document.querySelector('#scoreStatement').appendChild(scoreLog);
	updateScores();
	declareWinner();
}

function updateScores()
{
	document.getElementById('humanScore').textContent = `Your Score: ${humanScore}`;
	document.getElementById('computerScore').textContent = `Computer Score: ${computerScore}`;
}

function declareWinner()
{
	const scoreHeader = document.createElement('h1');
	scoreHeader.id = 'scoreHeaderId';

	if(humanScore === 5)
	{
		scoreHeader.textContent = `You win with ${humanScore} points`;
		scoreHeader.style.color = 'red';
		document.querySelector("#winner").appendChild(scoreHeader);
		resetButton();
	}

	if (computerScore === 5)
	{
		scoreHeader.textContent = `Computer Wins with ${computerScore} points`;
		scoreHeader.style.color = 'red';
		document.querySelector("#winner").appendChild(scoreHeader);
		resetButton();
	}
}

const buttonReset = document.createElement('button');

function resetButton()
{
	if (!document.getElementById("buttonResetId"))
	{
		buttonReset.id = 'buttonResetId';

		buttonReset.textContent = "RESET";
	
		document.querySelector("#winner").appendChild(buttonReset);
	
		buttonReset.addEventListener('click', () => {
			reset();
		});
	}
}

function reset()
{
	humanScore = 0;
	computerScore = 0;

	const scoreStatementDiv = document.getElementById('scoreStatement');
	scoreStatementDiv.innerHTML = '';

	const scoreStatementID = document.getElementById('winner');
	scoreStatementID.innerHTML = '';

	updateScores();
}

function playGame()
{
	const SDiv = document.createElement('div');

	const buttonDiv = document.createElement('div');
	const unoButton = document.createElement('button');
	const duoButton = document.createElement('button');
	const tresButton = document.createElement('button');

	unoButton.innerText = 'rock';
	duoButton.innerText = 'paper';
	tresButton.innerText = 'scissor';

	buttonDiv.appendChild(unoButton);
	buttonDiv.appendChild(duoButton);
	buttonDiv.appendChild(tresButton);

	SDiv.appendChild(buttonDiv);

	const resultDiv = document.createElement('div');
	const humanScoreHeader = document.createElement('h2');
	const computerScoreHeader = document.createElement('h2');

	humanScoreHeader.id = 'humanScore';
	resultDiv.appendChild(humanScoreHeader);

	computerScoreHeader.id = 'computerScore';
	resultDiv.appendChild(computerScoreHeader);

	SDiv.appendChild(resultDiv);

	document.querySelector('#playGameDiv').appendChild(SDiv);

	updateScores();

	unoButton.addEventListener('click', () => {
		playRound(getComputerChoice(), getHumanChoice('rock'));
	});

	duoButton.addEventListener('click', () => {
		playRound(getComputerChoice(), getHumanChoice('paper'));
	});

	tresButton.addEventListener('click', () => {
		playRound(getComputerChoice(), getHumanChoice('scissor'));
	});
}

playGame();
