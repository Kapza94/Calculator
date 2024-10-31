let firstNum = null;
let nextNum = null;
let operator = null;
const firstVisVal = document.getElementById("first-val");
const secondVisVal = document.getElementById("second-val");
let result = null;

const addition = (firstNum, nextNum) => {
  return firstNum + nextNum;
};

const subtraction = (firstNum, nextNum) => {
  return firstNum - nextNum;
};

const multiply = () => {
  return firstNum * nextNum;
};

const divide = (firstNum, nextNum) => {
  return firstNum / nextNum;
};

const clear = () => {
  screen.innerHTML = "";
  firstNum = null;
  nextNum = null;
};

const operate = (firstNum, operator, nextNum) => {
  if (operator === "+") {
    console.log(addition(firstNum, nextNum));
    addition(firstNum, nextNum);
  }
  if (operator === "-") {
    subtraction(firstNum, nextNum);
  }
  if (operator === "/") {
    divide(firstNum, nextNum);
  }
  if (operator === "*") {
    multiply(firstNum, nextNum);
  }
};

const getNumber = (num) => {
  if (firstNum && operator) {
    secondVisVal.innerHTML += num;

    nextNum = Number(secondVisVal.innerHTML);
  } else {
    //THIS LINE BELOW IS WHAT IS SEEN
    firstVisVal.innerHTML += num;
    //THIS LINE BELOW IS WHAT IS KEPT IN STORAGE(variable)
    firstNum = Number(firstVisVal.innerHTML);
  }
  console.log(`1st Num ${firstNum} 2nd num ${nextNum}`);
};

const getOperator = (op) => {
  operator = op;
  firstVisVal.innerHTML = "";
};

const equals = document.getElementById("equals").addEventListener("click", () => {
  operate(firstNum, operator, nextNum);
});
