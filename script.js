let playerScore = 0;
let computerScore = 0;

function computerPlay() {
	const selection = [ 'Rock', 'Paper', 'Scissors' ];
	const randomSelection = Math.floor(Math.random() * 3);
	let computerSelection = selection[randomSelection];
	return computerSelection;
}
