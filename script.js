const operation = {
  numA: '',
  operator: '',
  numB: '',
};
const display = document.querySelector('#result-display');
let numASet = false;
let operatorSet = false;
let decimalASet = false;
let decimalBSet = false;
function operate(a, z, b) {
  if (a == 0 && z == '/' && b == 0) {
    return ';-;';
  } else {
    let result;
    switch (z) {
      case '+':
        result = addNum(a, b);
        break;
      case '-':
        result = subtractNum(a, b);
        break;
      case 'x':
        result = multiplyNum(a, b);
        break;
      case '/':
        result = divideNum(a, b);
        break;
    }
    result = Math.round(result * 100) / 100;
    return result;
  }
}
function addNum(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  let result = a + b;
  return result;
}
function subtractNum(a, b) {
  let result = a - b;
  return result;
}
function multiplyNum(a, b) {
  let result = a * b;
  return result;
}
function divideNum(a, b) {
  let result = a / b;
  return result;
}
const inputNum = document.querySelectorAll('.button');
inputNum.forEach((el) => {
  el.addEventListener('click', controlUi);
});
function controlUi(e) {
  if (!isNaN(e.target.value)) {
    if (numASet) {
      let num = e.target.value;
      operation.numB += num;
      display.textContent = operation.numB;
    } else {
      let num = e.target.value;
      operation.numA += num;
      display.textContent = operation.numA;
    }
  } else if (e.target.value === '=') {
    if (!operatorSet) {
      display.textContent = 'Please select an operator first';
    } else {
      let result = operate(operation.numA, operation.operator, operation.numB);
      operation.numA = result;
      operation.numB = '';
      numASet = true;
      display.textContent = result;
      operatorSet = false;
    }
  } else if (e.target.value === 'clear') {
    operation.numA = '';
    operation.numB = '';
    operation.operator = '';
    operatorSet = false;
    display.textContent = '0';
    numASet = false;
    decimalASet = false;
    decimalBSet = false;
  } else if (e.target.id == 'operator') {
    if (operatorSet) {
      let result = operate(operation.numA, operation.operator, operation.numB);
      operation.numA = result;
      operation.operator = e.target.value;
      operation.numB = '';
      display.textContent = `${result} ${e.target.value}`;
      numASet = true;
      operatorSet = true;
    } else {
      operation.operator = e.target.value;
      operatorSet = true;
      numASet = true;
      display.textContent = e.target.value;
    }
  } else if (e.target.value == '.') {
    if (numASet) {
      if (decimalBSet) {
      } else {
        let decimal = e.target.value;
        operation.numB += decimal;
        display.textContent = operation.numB;
        decimalBSet = true;
      }
    } else {
      if (decimalASet) {
      } else {
        let decimal = e.target.value;
        operation.numA += decimal;
        display.textContent = operation.numA;
        decimalASet = true;
      }
    }
  }
}
