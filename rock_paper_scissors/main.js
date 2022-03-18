/* 
 * Code Outline:
 *
 * - init()
 *
 * - game()
 *   - startGame()
 *   - restart()
 *   - computerPlay()
 *   - playerPlay()
 *   - insertNewRow()
 *   - playRound()
 *   - updateGameMem()
 *   - endGame()
 *
  */
function init(){
  let startBtn = document.querySelector("#start-btn");
  startBtn.addEventListener("click", game);
}

function game(){
  const choices = ["rock", "paper", "scissor"];
  const results = ["win", "loss", "tie"];
  const rounds = 5;

  const playerScore = document.querySelector("#player-score");
  const computerScore = document.querySelector("#computer-score");
  const gameMsgCont = document.querySelector("#game-msg-section");
  const gamebtnCont = document.querySelector("#choice-section");
  const gameMsg = document.querySelector("#game-msg");
  const table = document.querySelector("#scoreboard")
  const startBtn = document.querySelector("#start-btn");
  const btns = [];

  let result;
  let wins = 0, losses = 0, roundNum = 1;

  function startGame(){
    startBtn.removeEventListener('click', game);
    startBtn.remove();

    gameMsg.textContent = "First to Win 5 Rounds Wins!"
    
    // Construct and set properties for each game button
    choices.map( choice => {
      const btn = document.createElement("button")
      btn.classList.add(".choice-btn");
      btn.setAttribute("id", `${choice}-btn`);
      btn.setAttribute("data-choice", choice);
      btn.addEventListener("click", playerPlay);

      const img = document.createElement("img")
      img.setAttribute("alt", choice)

      btn.appendChild(img);

      gamebtnCont.appendChild(btn)

      btns.push(btn)
    })

    playerScore.textContent = wins;
    computerScore.textContent = losses;
    table.textContent = '';
  }

  function restart(){
    startBtn.textContent = "Play Again!";
    startBtn.addEventListener('click', game);
    gameMsgCont.appendChild(startBtn);

    wins = 0;
    losses = 0;
  }

  function computerPlay(){
    return choices[Math.floor(Math.random() * 3)];
  }

  function playerPlay(e){
    let value = e.currentTarget.getAttribute("data-choice");
    playRound(value, computerPlay())
  }

  function insertNewRow(){
    const row = document.createElement("tr");
    row.classList.add("game-round-item")
    const rCol = document.createElement("td");
    rCol.appendChild(document.createTextNode(`R ${roundNum}:`))


    const wCol = document.createElement("td");
    const lCol = document.createElement("td");

    if(result == "win"){
      wCol.appendChild(document.createTextNode("W"));
      lCol.appendChild(document.createTextNode("L"));
    }

    else if(result == "loss"){
      wCol.appendChild(document.createTextNode("L"));
      lCol.appendChild(document.createTextNode("W"));
    }

    else if(result == "tie"){
      wCol.appendChild(document.createTextNode("T"));
      lCol.appendChild(document.createTextNode("T"));
    }

    // Update page by appending new rows to table

    row.appendChild(rCol)
    row.appendChild(wCol)
    row.appendChild(lCol)
    table.appendChild(row)
  }



  function playRound(playerSelection, computerSelection) {
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
    updateGameMem()
  }

  function updateGameMem(){
    // Update the game memory 
    // to record the result of the round

    if(result == "win"){
      gameMsg.innerText = "Player won the round!"
      ++wins
    } 
    else if(result == "loss"){
      gameMsg.innerText = "Player lost the round!"
      ++losses;
    } 
    else {
      gameMsg.innerText = "Player tied with the computer this round!"
    }

    insertNewRow(table, result);
    playerScore.textContent = wins;
    computerScore.textContent = losses;
    ++roundNum

    //Check if Game is over
    if(wins >= 5 || losses >= 5) endGame()
  }

  function endGame(){
    gameMsg.innerText = `End of the game:\nPlayer won ${wins} rounds\nComputer won ${losses} rounds`;

    // Remove game buttons
    btns.forEach(btn => 
      btn.removeEventListener("click", playerPlay) );
    gamebtnCont.textContent = "";

    restart();
  }

  startGame();
}

init()
