/* 
 * Code Outline:
 * 
 *   
  */

(function initGameboard(){
  const gameboard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]

  const gameState = {
    turn: 'Player 1',
    complete: false,
  }


  /* ----- Core Functionality ----- */

  const player1 = player('Player 1', '&times;')
  const player2 = player('Player 2', '&#9675;')

  const cellElements = document.querySelectorAll('td')

  cellElements.forEach(element => {
    element.addEventListener('click', (e) => {

      const {row, col} = element.dataset

      gameboard[row][col] = gameState.turn === player1.name ? 
	player1.value : player2.value

      element.innerHTML = gameboard[row][col]

      // Update Game state
      gameState.turn = gameState.turn === 'Player 1' ? 
	'Player 2' : 'Player 1'
      console.log(gameboard)
      console.log(checkForWinner(gameboard))
    })
  })

  /* ------------------------------ */

  /* ----- Utilities ----- */

  function player(name, value){
    return {name, value}
  }

  function checkForWinner(gameboard){

    const row = (function checkRows(gameboard){
      let val, winner = false;

      for(let i=0; i < gameboard.length; ++i){
	val = gameboard[i][0]
	if(!val) continue

	let result = true
	for(let j=0; j < gameboard[i].length; ++j){
	  if(gameboard[i][j] !== val){
	    result = false
	    break
	  }
	}

	if(result){
	  winner = true
	  break
	} 
      }
      return winner ? {result: true, val} : false
    })(gameboard)

    const col = (function checkCols(gameboard){
      let val, winner = false;

      for(let i=0; i < gameboard[0].length; ++i){
	val = gameboard[0][i]
	if(!val) continue

	let result = true
	for(let j=0; j < gameboard.length; ++j){
	  if(gameboard[j][i] !== val){
	    result = false
	    break
	  }
	}

	if(result){
	  winner = true
	  break
	} 
      }
      return winner ? {result: true, val} : false
    })(gameboard)

    const diag = (function checkDiags(gameboard){
      let val, winner = false;

      for(let i=0; i < gameboard[0].length; ++i){
	val = gameboard[0][i]
	if(!val) continue

	let result = true
	for(let j=0; j < gameboard.length; ++j){
	  if(gameboard[j][i] !== val){
	    result = false
	    break
	  }
	}

	if(result){
	  winner = true
	  break
	} 
      }
      return winner ? {result: true, val} : false
    })

    return col;
  }



  /* --------------------- */
  
})()
