let currentValue = "";
let previousValue = "";
let operator = "";

let number1 = "";
let number2 = "";
let equal = false;

document.addEventListener("DOMContentLoaded", () => {
  let numbers = document.querySelectorAll(".number");

  let operators = document.querySelectorAll(".operators");
  let clears = document.querySelector("#clear");
  let allClear = document.querySelector("#allclear");
  let decimal = document.querySelector("#decimal");
  let equals = document.querySelector("#equal");
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
      // console.log(op);
      operator = e.target.textContent;
      // operator = "+";
      // console.log(operator);
      handleOperator(operator);

      previous.textContent =
        previousValue + " " + operator + " " + currentValue;
      current.textContent = currentValue;

      // if (operator == "=") {
      //   equal = true;

      // }
    });
  });
  allClear.addEventListener("click", (e) => {
    previous.textContent = "";
current.textContent=""
    currentValue = "";
    previousValue = "";
    operator = "";
  });
  clears.addEventListener("click", (e) => {
    currentValue = "";
    current.textContent = "";
  });
  equals.addEventListener("click", (e) => {
    equal = e.target.textContent;
    // equal = true;
    let output = operate(operator, previousValue, currentValue);
    current.textContent = output;
    previous.textContent = previousValue + " " + operator + " " + currentValue;
    currentValue = output;
  });

  function handleOperator(op) {
    // console.log(op);

    previousValue = currentValue;
    currentValue = "";
  }
  function operate(operator, num1, num2) {
    if (operator == "+") {
      let out = add(num1, num2);
      console.log(out);
      return out;
    } else if (operator == "-") {
      let out = subtract(num1, num2);
      console.log(out);
      return out;
    } else if (operator == "*") {
      let out = multiply(num1, num2);
      console.log(out);
      return out;
    } else if (operator == "÷") {
      let out = divide(num1, num2);
      console.log(out);
      return out;
    } else if (operator == "%") {
      let out = percent(num1, num2);
      return out;
    }
    else{let out=currentValue
      
 return out     
    }

  }

  function handleNumber(num) {
    if (currentValue.length <= 9) currentValue = currentValue + num;
  }
});

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
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
function percent(num1, num2) {
  return (num1 / 100) * num2;
}
