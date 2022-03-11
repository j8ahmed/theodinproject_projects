const choices = ["rock", "paper", "scissor"];
const results = ["win", "loss", "tie"];

function computerPlay(){
  return choices[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
  let result;

  switch(playerSelection){
    case "rock":
      if(computerSelection == "paper") result = results[1];
      else if(computerSelection == "rock") result = results[2];
      else result = results[0]
      break;

    case "paper":
      if(computerSelection == "scissor") result = results[1];
      else if(computerSelection == "paper") result = results[2];
      else result = results[0]
      break;

    case "scissor":
      if(computerSelection == "rock") result = results[1];
      else if(computerSelection == "scissor") result = results[2];
      else result = results[0]
      break;

    default:
      result = "Invalid Player Choice";
  }

  return result;
}



function game(){
  const rounds = 5;
  let wins = 0, losses = 0;

  for(let i=0; i < rounds; ++i){
    const playerSelection = prompt("Choose One: 'rock', 'paper', 'scissor'");
    const computerSelection = computerPlay();

    let result = playRound(playerSelection, computerSelection);

    if(result == "win"){
      console.log("Player won the round!")
      ++wins
    } 
    else if(result == "loss"){
      console.log("Player lost the round!")
      ++losses;
    } 
    else console.log("Player tied with the computer this round!")
    
  }

  console.log(`End of the game:\nPlayer won ${wins} rounds\nComputer won ${losses} rounds`)
}

game();
