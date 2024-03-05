const operation = {
  numA: 0,
  operator: '',
  numB: 0,
};
function operate(a, z, b) {
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
  return result;
}
function addNum(a, b) {
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
