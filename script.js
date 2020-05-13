const pageButton = document.querySelectorAll('button');
const display = document.querySelector('input');
let displayValue = "";
let inputValue1 = 0;
let inputValue2 = 0;
let operatorValue = "";
let firstInput = true;
let newCalc = true;
let firstPass = true;
let decimal = "";
let calcValue = 0;


function add(a, b) {

  return a + b;
}

function subtract(a, b) {

	return a - b;
}

function multiply(a, b){

  return a * b;
}

function divide(a, b){

  return a / b;
}

function operate(operator, number1, number2) {
   
  value = window[operator](number1, number2);
  
  return value;
}

for (let i = 0; i < pageButton.length; i += 1) {

  pageButton[i].addEventListener('click', (e) => { 

    if (pageButton[i].className === "number") {
    
      if(firstInput || newCalc) {
      
        inputValue1 = 0;
        displayValue += pageButton[i].value; 
        display.value = displayValue;
        inputValue1 = parseFloat(display.value);
     
      } else if (firstInput === false) {

          displayValue += pageButton[i].value; 
          display.value = displayValue;
          inputValue2 = parseFloat(display.value);
      }
   
      decimal.disabled = false;
   
    } else if (pageButton[i].className === "operator" && firstPass === true ) {
          
      operatorValue = pageButton[i].value;
      displayValue = "";
      firstInput = false;
      newCalc = false;
      firstPass = false;
     
    } else if (pageButton[i].className === "operator" && firstPass === false) {
      
      calcValue = operate(operatorValue, inputValue1, inputValue2);
      
      operatorValue = pageButton[i].value;
      display.value = calcValue;
      inputValue1 = calcValue;
      displayValue = "";
    
    } else if  (pageButton[i].className === "equal-sign") {
   
      calcValue =  operate(operatorValue, inputValue1, inputValue2);
          
      display.value = calcValue;
      inputValue1 = calcValue;
      displayValue = "";
      newCalc = true;
      firstPass = true;
       
    } else if (pageButton[i].className === "all-clear") {
        display.value = "0";
        displayValue = "";
        firstInput = true;
        inputValue1 = 0;
        inputValue2 = 0;
        firstPass = true;
        
    } else if ( pageButton[i].className === "decimal") {
        displayValue += pageButton[i].value;
        decimal = pageButton[i];
        decimal.disabled = true; 
      }
  });
}
    