// let sum = numArary.reduce((a, b) => (a + b));
function numA(num1, num2, num3, num4, num5) {
  return Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5);
}

function getNum() {
  let num = document.querySelectorAll('.num');
  let numArary = [];
  num.forEach(i => {
    numArary.push(i.value);
  })
  return numArary;
}

function sumResult() {
  let result1 = document.querySelector('.result');
  let nums = getNum();
  let result = numA(nums[0], nums[1], nums[2], nums[3], nums[4]);
  result1.value = result;
  return result;
}

function avgResult() {
  let result1 = document.querySelector('.result');
  let sumff = sumResult();
  result1.value = sumff / 5;
}

const sumBtn = document.querySelector('.sum');
const avgBtn = document.querySelector('.avg');
sumBtn.addEventListener('click', sumResult);
avgBtn.addEventListener('click', avgResult);