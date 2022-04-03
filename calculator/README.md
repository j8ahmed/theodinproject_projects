# Rock Paper Scissors Project

![Project Design](./docs/ui_design.png)


## To Do:

- [x] Finish basic outline design of project (Containers for UI)
- [x] Set up files and links between them
- [x] Add rough HTML layout of elements (display, buttons)
- [x] Plan and Outline functionality of code (How will the calculator work)
- [x] Build out arithmetic functions (add, subtract, multiply, divide)
- [ ] Build out core functions for calculator
  - [x] Build update state function by matching staging values and checking for differences (Type check is a bonus)
  - [x] Build button / decimal button callback function for their respective event listeners
    - [x] Build decimalCheck function to prevent multiple decimals inserted into Calculator
    - [x] Build updateDisplay function to handle display calls.
  - [x] Build operator button callback function for their respective event listeners

- [x] Build initialization code to connect elements to event listeners to make the calculator work
  - [x] Had to update HTML to includes classes to get all related UI
  - [x] Had to fix bug for pulling `<td>` element value
  - [x] Had to add case for the base case of the Calculator Display showing "0"
  - [x] Fix bug where second operand is being appended instead of replacing display
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 


### Bonus To Do Items

- [ ] 

## Tests

1. `1 + 5 = 6`

## Core Operations:

```
How can I ensure there are less bugs with:
  1. Chaining operations
  2. Adjusting operators

In most calculators one math operation is evaluated at a time.
The basic math operation involves 4 steps:
  1. Input the first number
  2. Input the operator
  3. Input the second number
  4. Press "=" to perform the math operation by applying the operand to the first and second number.

Although that is the generic process, there are a few extra options available at each step
that will impact the operation.

Options while inputting the first number:

  - Add a decimal place (only allow one)
  - Add leading zeros (bad)
  - Backspace (correct input - Bonus)
  - Clear (reset the calculator - global)

Options while inputting the operator:

  - Change the operator
  - Pressing the operator button multiple times (Should just change the operator)
  - Evaluating the previous operation while preparing the next opartion e.g. `1 + 2 - 1 + 5 - 2`

Options while inputting the second number:

  - Add a decimal place (only allow one)
  - Add leading zeros (bad)
  - Backspace (correct input - Bonus)
  - Clear (reset the calculator - global)

```



---

## Meta Data

Started On: 2022-03-30


## Relevant Links

- [Odin Project Page](https://www.theodinproject.com/lessons/foundations-calculator)
- []()
- []()
- []()

Cool Submissions 1
- [View](https://captain-usopp.github.io/Calculator/)
- []()

## Bug Fixes

- [Table data span 2 columns](https://www.w3schools.com/tags/att_td_colspan.asp)
- [For of loop docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [For Each loop for arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [How to check if property exists](https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript)
- [Javascript prop 'in' object operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
- [Jump to Function definition in Vim](https://stackoverflow.com/questions/635770/jump-to-function-definition)
- [Parsing String in JavaScript](https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l)
- [Get td text value](https://stackoverflow.com/questions/2310145/javascript-getting-value-of-a-td-with-id-name)
- []()
- []()
- []()
- []()
- []()
- []()
