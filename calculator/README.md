# Rock Paper Scissors Project

![Project Design](./docs/ui_design.png)


## To Do:

- [x] Finish basic outline design of project (Containers for UI)
- [x] Set up files and links between them
- [x] Add rough HTML layout of elements (display, buttons)
- [x] Plan and Outline functionality of code (How will the calculator work)
- [x] Build out arithmetic functions (add, subtract, multiply, divide)
- [x] Build out core functions for calculator
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

- [x] Build reset function
  - [x] Attach it to it's corresponding button

- [ ] 
- [ ] 
- [ ] 
- [ ] 


### Bonus To Do Items

- [ ] 

## Bugs

- [x] After an initial calculation pressing multiple operators repeatedly perform the stored operation instead of allowing for a change of operators
  - [x] Fix incorrect representation of the first operand and chaining operations. The second operand needs to be preserved. I need to
        change the way I handle the reset scenario.
  ```
  1 + 2 = 3
        = 5
	= 7
	etc...
  The second operator is preserved for repeated operations on the running total (i.e. the first operator in my representation). 
  I need to fix this.
  ```
- [x] Fix multiplication operation bug
- [ ] Fix initial/default addition scenario. "5,+,=" results in 10. "5,-,=" results in 0. 
  - [ ] Fix incorrect naming of firstOperand to operand and total pairing.
  - [ ] I broke the calculator LOL. so yeah. I changed my design because I found a flaw in it and now my stuff is trash. Oops. Back to the drawing board I guess.

- [x] Fix doubling instead of holding onto the operand when repeating an operation using "=,=".
  - [x] How do I separate the operand from the current display value?
  

1. `1 + 5 = 6`

## Core Operations:

```
How can I ensure there are less bugs with:
  1. Chaining operations
  2. Adjusting operators

In an I Phone Calculator (which is what my calculator is based off of), what is being displayed is always the current total. 
I originally thought that the first operation involved two operands provided by the user but it only ever involves one 
operand provided by the user and the current total. 

By default the total of almost all calculators is "0". Therefore our first operation will be 0 + "First input" and will
initiated by the user pressing an operation button. 

Ex: "9 + 1 = 10" is really "0 + 9 + 1 = 10"

We are only ever inputting an operand and performing an operation with that and the running total.

Options while inputting the operand number:

  - Add a decimal place (only allow one)
  - Add leading zeros (bad)
  - Backspace (correct input - Bonus)
  - Clear (reset the calculator - global)

Options while inputting the operator:

  - Change the operator
  - Pressing the operator button multiple times (Should just change the operator)
  - Evaluating the previous operation while preparing the next opartion e.g. `1 + 2 - 1 + 5 - 2`

What values do I need to stage?

- current operator
- operand (last number before the operation took place)

What values can I change directly?

- display

Calculator Processes:

General:
--------

Initial value -> start input of new operand -> perform operation -> start input of new operand
              \
	       -> change default operand -> start input of new operand -> perform operation ->



Construct operand:
-----------------

User inserts number -> Any operator changes are made permanent for the next operation (staging -> state)
                    -> Decimal checking is done
		    -> Check for 


Perform Operation:
------------------

user inputs an operator -> Perform operation -> 
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

## Bug Fixes References

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
