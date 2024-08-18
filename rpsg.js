const choice = ["rock", "paper", "scissor"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
	const i = Math.floor(Math.random() * (3 - 0) + 0)
	return choice[i];
}

function getHumanChoice()
{
	let userChoice = window.prompt("Type A Choice").toLowerCase();
	if(choice.includes(userChoice))
	{
		return userChoice
	}
	else
	{
		throw new Error("Invalid Choice for the game");
	}
}

function playRound(computerSelection, humanSelection)
{
	if(computerSelection === humanSelection)
	{
		console.log(`It is A tie. Both chose ${computerSelection}`);
	}

	else if((computerSelection === "scissor" && humanSelection === "rock") || 
	(computerSelection === "paper" && humanSelection === "scissor") ||
	(computerSelection === "rock" && humanSelection === "paper")
	)
	{
		console.log(`h:${humanSelection} beats c:${computerSelection}. You Win`);
		humanScore += 1;
	}
	else
	{
		console.log(`c:${computerSelection} beats h:${humanSelection}. You Lose`);
		computerScore += 1;
	}
}

function playGame()
{
	for(let i = 0; i < 5; i++)
	{
		let userSelection = getHumanChoice();
		let computerChoiceSelection = getComputerChoice();
		playRound(computerChoiceSelection, userSelection);
	}
	console.log(`Your Score: ${humanScore}`);
	console.log(`Computer Score: ${computerScore}`);
}

playGame();