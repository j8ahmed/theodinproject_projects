/* 
 * Code Outline:
 * 
 * calcultor()
 *
 *   Core:
 *     - init();
 *     - updateState(newState)
 *     - updateStaging(StagingValues)
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
 *
  */


function calculator(){
  const numBtns = document.getElementsByClassName("num-btn");
  const opBtns = document.getElementsByClassName("op-btn");
  const specialBtns = document.getElementsByClassName("special-btn");
  const display = document.getElementById("display");
  const state = {
    firstOperand: 0,
    currOperator: "+",
    rTotal: 0,             // number
    display: "0",          // string
  }
  const stagingValues = {
    ready: false,
  }

  // Core functions

  function init(){
    // Add Event Listeners
    Array.from(numBtns).forEach(
      element => element.addEventListener("click", numDecPress));
    Array.from(opBtns).forEach(
      element => element.addEventListener("click", operatorPress));
    updateUI();
  }

  function updateState(){
    Object.keys(stagingValues).forEach(prop => {
      if(prop in state && stagingValues[prop] !== state[prop]){
	state[prop] = stagingValues[prop];
      }  
    });
  }

  function updateStaging(name, value){
    stagingValues[name] = value;
  }

  function operation(n1, n2, op){
    switch(op){
      case "+":
	return add(n1, n2);

      case "-":
	return subtract(n1, n2);

      case "*":
	return multiply(n1, n2);

      case "/":
	return divide(n1, n2);

      default:
	return add(n1, n2);
    }
  }

  function numDecPress(e){
    let startSecondOperand = false;    
    const btnVal = e.target.textContent;
    // Push any values in staging to state
    if(stagingValues.ready){
      updateState();
      updateStaging("ready", false);
      startSecondOperand = true;
    } 

    // Handle decimal input
    if(btnVal === "."){
      if(decimalCheck()) 
	return
      else{
	updateDisplay(state.display + ".");
	return
      } 
    }
    // Handle reset case Display has only "0"
    if(state.display === "0"){
      console.log(btnVal)
      updateDisplay(btnVal);
    }
    else if(startSecondOperand)
      updateDisplay(btnVal);
    else
      updateDisplay(state.display + btnVal);
  }

  function operatorPress(e){
    if(state.firstOperand !== 0 && state.currOperator !== ""){
      // Perform operation and show result
      const result = operation(
	Number(state.firstOperand), 
	Number(state.display), 
	state.currOperator
      );
      updateDisplay(result);
    }

    // Send updated values to staging to wait for Confirmation
    updateStaging("currOperator", e.target.textContent);
    updateStaging("firstOperand", state.display);
    updateStaging("ready", true);
  }

  // Utility functions
  function add(n1, n2){ return n1 + n2 }
  function subtract(n1, n2){ return n1 - n2 }
  function multiply(n1, n2){ return n1 * n2 }
  function divide(n1, n2){ return n1 / n2 }
  function reset(){}
  function clear(){}
  function decimalCheck(){ 
    const regx = new RegExp(state.display);
    return regx.test(".") 
  }

  function updateDisplay(value){
    state.display = String(value);
    updateUI();
  }

  function updateUI(){
    display.textContent = state.display;

    // For Testing purposes
    Object.keys(state).map(
      prop => console.log(`${prop}: ${state[prop]}\n`))
    console.log("---------")
  }

  init()                    // Initialize calculator
}

calculator();
