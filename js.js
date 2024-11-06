let firstNum = null;
let nextNum = null;
let operator = null;
const firstVisVal = document.getElementById("first-val");
const secondVisVal = document.getElementById("second-val");
let result = null;
const screen = document.getElementById("screenId");

const addition = (firstNum, nextNum) => firstNum + nextNum;
const subtraction = (firstNum, nextNum) => firstNum - nextNum;
const multiply = () => firstNum * nextNum;
const divide = (firstNum, nextNum) => firstNum / nextNum;

const clear = () => {
  screen.innerHTML = "";
  firstNum = null;
  nextNum = null;
  location.reload();
  firstVisVal = "";
  secondVisVal = "";
};

const resetCalc = document.getElementById("clear").addEventListener("click", clear);

const operate = (firstNum, operator, nextNum) => {
  if (operator === "+") {
    // console.log(addition(firstNum, nextNum));
    return addition(firstNum, nextNum);
  }
  if (operator === "-") {
    // console.log(addition(firstNum, nextNum));
    return subtraction(firstNum, nextNum);
  }
  if (operator === "/") {
    // console.log(addition(firstNum, nextNum));
    return divide(firstNum, nextNum);
  }
  if (operator === "x") {
    // console.log(addition(firstNum, nextNum));
    return multiply(firstNum, nextNum);
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

const getResult = () => {
  if (firstNum != null && operator != null && nextNum != null) {
    result = operate(firstNum, operator, nextNum);
    screen.innerHTML = result;
    console.log(result);

    firstNum = result;
    nextNum = null;
    operator = null;
  }
};

document.getElementById("equals").addEventListener("click", getResult);
