let playerScore = 0;
let computerScore = 0;

function computerPlay() {
	const computerPick = [ 'rock', 'paper', 'scissors' ];
	const computerChoice = computerPick[Math.floor(Math.random() * 3)];
	return computerChoice;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		alert('Draw!');
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		playerScore++;
		alert('You won the round! Rock beats scissors');
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		computerScore++;
		alert('You lost the round! Paper beats rock.');
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		playerScore++;
		alert('You won the round! Paper beats rock.');
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		computerScore++;
		alert('You lost the round! Scissors beats paper!');
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		playerScore++;
		alert('You won the round! Scissors beats paper.');
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		computerScore++;
		alert('You lost the round! Rock beats scissors');
	}
}

function game() {
	for (i = 0; i < 5; i++) {
		let playerSelection = prompt('Pick Your Weapon: Rock, Paper or Scissors').toLowerCase();
		let computerSelection = computerPlay();
		playRound(playerSelection, computerSelection);
		console.log(playerScore, computerScore);
	}
	if (playerScore > computerScore) {
		alert("Congrats you've won the game!");
	} else if (playerScore < computerScore) {
		alert("Sorry you've lost the game!");
	} else alert("You've tied!");
}

game();
