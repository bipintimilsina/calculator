let currentValue = "";
let previousValue = "";
let operator = "";

document.addEventListener("DOMContentLoaded", () => {
  let numbers = document.querySelectorAll(".number");

  let operators = document.querySelectorAll(".operators");
  let clear = document.querySelector("#clear");
  let allClear = document.querySelector("#allclear");
  let decimal = document.querySelector("#decimal");
  let equal = document.querySelector("#equal");
  let previous = document.querySelector(".previous");
  let current = document.querySelector(".current");

  numbers.forEach((number) => {
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      current.textContent = currentValue;
    });
  });

  operators.forEach((op) => {
    op.addEventListener("click", (e) => {
      console.log(op)
     operator= e.target.textContent;
     console.log(operator)
     current.textContent=operator
   let num1=5
   let num2=4
   operate(operator,num1,num2) });
  });

  function operate(operator, num1, num2) {

if(operator=="+"){
  let op=add(num1,num2)
console.log(op)
}

  }

  function handleNumber(num) {
    if (currentValue.length <= 9) currentValue = currentValue + num;
  }
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
