import style from './style'


console.log('Nigga we made it!!!');
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
    turn: '&times;',
    result: '',
    message: '',
    complete: false,
  }


  /* ----- Core Functionality ----- */

  const player1 = player('Player 1', '&times;')
  const player2 = player('Player 2', '&#9675;')

  addInputEventListeners()
  addStartEventListener()
  addResetEventListener()

  /* ------------------------------ */

  /* ----- Utilities ----- */

  function player(name, value){
    return {name, value}
  }

  function checkForWinner(gameboard){

    const checkRow = (function checkRows(){
      let val, win = false;

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
	  win = true
	  break
	} 
      }
      if(win){
	const winner = val === player1.value ? player1.name : player2.name
	return {
	  result: true,
	  value: winner,
	  message: "Winner: " + winner,
	}
      }
      return {result: false}
    })()

    const checkCol = (function checkCols(){
      let val, win= false;

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
	  win = true
	  break
	} 
      }
      if(win){
	const winner = val === player1.value ? player1.name : player2.name
	return {
	  result: true, 
	  value: winner,
	  message: "Winner: " + winner,
	}
      }
      return {result: false}
    })()

    const checkDiag = (function checkDiags(){
      const len = gameboard.length
      let winner = false
      let valTL = gameboard[0][0]
      let valTR = gameboard[0][2]
      let resultTL = true
      let resultTR = true

      for(let i=1; i < len; ++i){
	if(!valTL) resultTL = false
	if(!valTR) resultTR = false
	if(!valTL && !valTR) break

	if(gameboard[i][i] !== valTL){
	  resultTL = false
	}

	if(gameboard[i][(len - 1) - i] !== valTR){
	  resultTR = false
	}
      }

      if(resultTL){
	const winner = player1.value === valTL ? player1.name : player2.name
	return {
	  result: true, 
	  value: winner,
	  message: "Winner: " + winner,
	}
      }
      if(resultTR){
	const winner = player1.value === valTR ? player1.name : player2.name
	return {
	  result: true, 
	  value: winner,
	  message: "Winner: " + winner,
	}
      }
      return {result: false}
    })()

    const checkFull = (function checkFull(){
      let blankSpace = false

      main:
      for(let i=0; i < gameboard.length; ++i){
	for(let j=0; j < gameboard.length; ++j){
	  if(!gameboard[i][j]){
	    blankSpace = true
	    break main
	  }
	}
      }
      if(blankSpace) return false
      return true
    })()

    if(checkRow.result) return checkRow
    if(checkCol.result) return checkCol
    if(checkDiag.result) return checkDiag
    if(checkFull) return {result: true, value: 'Tie', message: 'Tie Game'}
    return {result: false}
  }

  // Add display messages based on results.
  function updateDisplay(){
    const display = document.getElementById('display')
    display.innerHTML = gameState.message
  }

  function updateState(newState){
    for(const key in gameState){
      if(newState[key] !== undefined){
	gameState[key] = newState[key]
      }
    }

    // Game Over
    if(gameState.complete){
      removeGameboardEventListeners()
    }

    updateDisplay()
  }

  /* Event Listeners */

  function addStartEventListener(){
    const startBtn = document.getElementById('start-btn')
    startBtn.addEventListener('click', startGame)
  }

  function addResetEventListener(){
    const resetBtn = document.getElementById('reset-btn')
    resetBtn.addEventListener('click', resetGame)
  }

  function addInputEventListeners(){
    const inputs = document.querySelectorAll('input')

    inputs.forEach(input => {
      input.addEventListener('change', changePlayerName)
    })
    
  }
  function addGameboardEventListeners(){
    const cellElements = document.querySelectorAll('td')
    cellElements.forEach(element => {
      element.addEventListener('click', clickGameCell)
    })
  }

  function removeGameboardEventListeners(){
    const cellElements = document.querySelectorAll('td')
    cellElements.forEach(element => {
      element.removeEventListener('click', clickGameCell)
    })
  }

  function clickGameCell(e){
    const {row, col} = e.target.dataset

    gameboard[row][col] = gameState.turn === player1.value ? 
      player1.value : player2.value

    e.target.innerHTML = gameboard[row][col]
    e.target.removeEventListener('click', clickGameCell)

    const nextTurn = gameState.turn === player1.value ? player2.value : player1.value
    const message = (nextTurn === player1.value ? player1.name : player2.name) + "'s Turn"
    const gameResult = checkForWinner(gameboard)
    if(gameResult.result){
      updateState({turn: '', complete: true, message: gameResult.message})
    }
    else
      updateState({turn: nextTurn, complete: gameResult.result, message})
  }

  function changePlayerName(e){
    console.log('input change handle called')
    const p = e.target.dataset.player
    const name = e.target.value

    if(p == 1) player1.name = name
    else player2.name = name
  }

  function startGame(e){
    e.target.removeEventListener('click', startGame)
    addGameboardEventListeners()
  }

  function resetGame(){
    for(let i=0; i < gameboard.length; ++i)
      for(let j=0; j < gameboard.length; ++j)
	gameboard[i][j] = ''

    console.log(gameboard)
    const cellElements = document.querySelectorAll('td')
    const inputs = document.querySelectorAll('input')

    cellElements.forEach(element => {
      element.innerHTML = ''
      element.removeEventListener('click', clickGameCell)
    })
    
    cellElements.forEach(element => {
      element.addEventListener('click', clickGameCell)
    })

    inputs.forEach(input => {
      input.value = ''
    })

    updateState({turn: '&times;', result: '', message: '', complete: false })
  }

  /* --------------------- */
  
})()
