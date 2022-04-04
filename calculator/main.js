/* 
 * Code Outline:
 * 
 * calcultor()
 *
 *   Core:
 *     - init();
 *     - updateState(newState)
 *     - updateStaging(stagingValues)
 *     - operation(n1, n2, op)
 *     - numDecPress(e)
 *     - operatorPress(e)
 *
 *   Utility:
 *     - add()
 *     - subtract()
 *     - multiply()
 *     - divide()
 *     - reset()
 *     - clear()
 *     - decimalCheck();
 *     - updateDisplay();        // Updates state and Element 
 *     - updateUI();             // Updates UI with state
 *     - clearStaging            // Update state and set ready:false
 *
  */


function calculator(){
  const numBtns = document.getElementsByClassName("num-btn");
  const opBtns = document.getElementsByClassName("op-btn");
  const specialBtns = document.getElementsByClassName("special-btn");
  const display = document.getElementById("display");
  const state = {
    total: 0,              // number
    operand: "",           // string
    currOperator: "+",     // string
    display: "0",          // string
  }
  const stagingValues = {
    ready: true,
    currOperator: state.currOperator,
    operand: state.operand
  }

  // Core functions

  function init(){
    // Add Event Listeners
    Array.from(numBtns).forEach(
      element => element.addEventListener("click", numDecPress));
    Array.from(opBtns).forEach(
      element => element.addEventListener("click", operatorPress));
    Array.from(specialBtns).forEach(element => {
      const value = element.textContent;
      if(value === "AC")
	element.addEventListener("click", reset)
      else if(value === "C")
	element.addEventListener("click", clear)

//      else if(value === "C")
//	element.addEventListener("click", clear)
    });
    updateUI();
  }

  function updateState(){
    Object.keys(stagingValues).forEach(prop => {
      if(prop in state && stagingValues[prop] !== state[prop])
	state[prop] = stagingValues[prop];
    });
  }

  function updateStaging(newValues){
    Object.keys(newValues).forEach(prop => {
      if(prop in stagingValues)
	stagingValues[prop] = newValues[prop];
    });
  }

  function operation(n1, n2, op){
    switch(op){
      case "+":
	return add(n1, n2);

      case "-":
	return subtract(n1, n2);

      case "x":
	return multiply(n1, n2);

      case "/":
	if(n2 === 0) return "Goofy!"
	return divide(n1, n2);
	
      case "=":
	return 

      default:
	return add(n1, n2);
    }
  }

  function numDecPress(e){
    /*
     * When a number / decimal button is pressed it will:
     * - clear the operand
     * - Move any staging values to state
     * - Update the calculator display
     * 
     * */
    let startSecondOperand = false;    
    const btnVal = e.target.textContent;

    // If operand is set clear it (since we are constructing a new one now)
    if(state.operand)
      clearOperand();

    // Push staging to state
    if(stagingValues.ready){
      clearStaging();
      startSecondOperand = true;
    } 

    // Handle decimal input
    if(btnVal === "."){
      if(decimalCheck()) return
      else{
	updateDisplay(state.display + ".");
	return
      } 
    }

    // Handle new operand
    if(startSecondOperand)
      updateDisplay(btnVal);
    else
      updateDisplay(state.display + btnVal);
  }

  function operatorPress(e){
    /*
     * When an operator button is pressed it will:
     * - Check staging -> If NOT "ready" perform the operation 
     * - Update state immediately with new results
     * - Send pressed OP to staging for the next operation
     * ??????
     * - Update state, the stored value for the next operation
     * */

    const pressedOp = e.target.textContent;
    const currOperand = state.operand ? state.operand : state.display;

    // Perform operation if nothing in staging
    // Perform operation if it's a repeat operation
    if(!stagingValues.ready 
      || (stagingValues.ready && pressedOp === "=")){
      const result = operation(
	Number(state.total), 
	Number(currOperand), 
	state.currOperator
      );

      const nDecimals = String(result).split(".")[1] ? 
	String(result).split(".")[1].length :
	0 ;
      if(/\./.test(String(result)) && nDecimals > 6){
	// Check if value is too large for screen > 6 digits
	const val = Math.round(result * Math.pow(10, 6)) / Math.pow(10, 6)
	console.log(val)
	updateDisplay(val);
	updateTotal(val);
      }
      else{
	updateDisplay(result);
	updateTotal(result);
      }
      updateOperand(currOperand);
    }

    // prepare for the next operation  
    if(pressedOp === "="){
      updateStaging({
	ready: true
      });
    }
    else{
      updateStaging({
	currOperator: pressedOp,
	ready: true
      });
    }
  }

  // Utility functions
  function add(n1, n2){ return n1 + n2 }
  function subtract(n1, n2){ return n1 - n2 }
  function multiply(n1, n2){ return n1 * n2 }
  function divide(n1, n2){ return n1 / n2 }
  function reset(){
    updateStaging({
      ready: true,
      currOperator: "+",     // string
      operand: "",          // string
    })
    updateState();
    
    updateDisplay("0");
    state.total = 0;
  }
  function decimalCheck(){ 
    const regx = new RegExp(state.display);
    return regx.test(".") 
  }

  function updateDisplay(value){
    /*
     * Update ONLY the State's display for UI Updates
     * - Send new value to staging and immediately update state
     * - Refresh the UI with the new values
     * */
    state.display = value;
    updateUI();
  }

  function updateTotal(value){
    state.total = value;
  }

  function updateOperand(value){
    state.operand = value;
  }

  function updateUI(){
    display.textContent = state.display;
  }

  function clearStaging(){
    updateState();
    updateStaging({ready: false});
  }

  function clearOperand(){
    state.operand = "";
  }

  init()                    // Initialize calculator
}

calculator();
