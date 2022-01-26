const results = ['Rock','Paper', 'Scissors']
let win = 0;

function computerPlay() {
    return results[Math.floor(Math.random()*3)]
}

function getChoice () {
    let choice = prompt("Please enter your choice","Rock");
    return (choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase());
}


function playRound(playerSelection,computerSelection) {
    
    computerSelection = computerPlay();
    
    playerSelection = getChoice()
    if (computerSelection== playerSelection) {
        alert("Draw")
    } else if (
        computerSelection == "Scissors" && playerSelection == "Rock"||computerSelection == "Rock" &&  playerSelection == "Paper"|| computerSelection == "Paper"&&playerSelection=="Scissors")  {
            alert(`You win! ${playerSelection} beat ${computerSelection} `)
        
            win += 1;
    } else {
        alert("You lose!")
    }
    console.log(computerSelection);
    console.log(playerSelection);

}
for (let i = 0; i < 5; i++) {
    playRound();

}
if (win >=3) {
    alert(`Congratulation! You win ${win}/5`)
}else{
    alert(`Shame on you :)))) ${win}/5`)
}
window.alert("you win")