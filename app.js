let userScore = 0;

let computerScore = 0;

const userScore_span = document.getElementById("user-score");

const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector("score-bord");

const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("P");

const paper_div = document.getElementById("A");

const scissirs_div = document.getElementById("T");

function getComputerChoice() {
  const choices = ['P', 'A' , 'T'];
  const randomnumber = Math.floor(Math.random() * 3 );
  return choices [randomnumber];
}

function convertToword(letter) {
  if (letter === "P") return "PEDRA";
  if (letter === "A") return "PAPEL";
    return "TESOURA"
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
 result_p.innerHTML = convertToword (userChoice) + " CONTRA " + convertToword (computerChoice) + " Você ganhou!! "
 userChoice_div.classList.add('green-glow');
 setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow')}, 1000 );
}
function lose (userChoice, computerChoice) {
  const computerChoice_div = document.getElementById(computerChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
 result_p.innerHTML = convertToword (userChoice) + " CONTRA " + convertToword (computerChoice) + " Você perdeu!! "
 computerChoice_div.classList.add('blue-glow');
 setTimeout(function(){ document.getElementById(computerChoice).classList.remove('blue-glow')}, 1000 );
}

function draw (userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
 result_p.innerHTML = convertToword (userChoice) + " CONTRA " + convertToword (computerChoice) + " EMPATE !! "
 userChoice_div.classList.add('yellow-glow');
 setTimeout(function(){ document.getElementById(userChoice).classList.remove('yellow-glow')}, 1000 );
}

function game (userChoice) {
  const computerChoice = getComputerChoice();
  switch ( userChoice + computerChoice) {
    case "PT":
    case "AP": 
    case "TA": 
      win (userChoice, computerChoice);
      break;
    case "PA":
    case "AP":
    case "TP":
        lose (userChoice, computerChoice);
        break;
      case "PP":
      case "AA":
      case "TT":
        draw (userChoice, computerChoice);
        break;
  }
}

function main() {

  rock_div.addEventListener ('click', function() {
   game("P");
  })

  paper_div.addEventListener ('click', function() {
   game("A");
  })

  scissirs_div.addEventListener ('click', function() {
   game("T");
  })
}

main();
