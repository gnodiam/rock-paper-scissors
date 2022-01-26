const results = ['Rock','Paper', 'Scissors']
let playerScore = 0, computerScore = 0;

let playerSelection, computerSelection;

//function computerPlay() {
    
//}

/*function getChoice () {
    let choice = prompt("Please enter your choice","Rock");
    return (choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase());
    const button = document.querySelector('button');
        button.addEventListener('click', () => {
            alert(button.id);
            console.log(button.id)
          });
        };*/



function playRound() {
    
    computerSelection = results[Math.floor(Math.random()*3)];
    
    
    // playerSelection = getChoice()
    if (computerSelection== playerSelection) {
        alert("Draw")
    } else if (
        computerSelection == "Scissors" && playerSelection == "Rock"||computerSelection == "Rock" &&  playerSelection == "Paper"|| computerSelection == "Paper"&&playerSelection=="Scissors")  {
        
            playerScore += 1;
            div1.textContent = `Your score: ${playerScore}`
    } else {
        computerScore +=1;
        div2.textContent = `Computer score: ${computerScore}`

    }
    if (playerScore == 5) {
        alert("You win!")
    } else if (computerScore == 5) {
        alert("You lose!!!!!!!!!!!!")
    }
    console.log(computerSelection);
    console.log(playerSelection);
};

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener('click',function () {
        playerSelection =button.innerText;})
    button.addEventListener('click',playRound);

    })

const body = document.querySelector('body');
const div1 = document.createElement('div');
div1.classList.add('your-score');
div1.textContent = "Your score:"
body.appendChild(div1);
const div2 = document.createElement('div');
div2.classList.add('computer-score');
div2.textContent = "Computer score:"
body.appendChild(div2);