var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

var lineNum = 0;
var num = 0;
var numArr = [];
var majority = numArr[0];
var counter = 1;
var newArr = [];

if (num !== numArr.length) return 'wrong input';

function sortArr(numArr) {
  for (var i = 0; i < numArr.length; i++) {
    if (i === 0) {
      newArr.push(numArr[i]);
    } else if (numArr[i] <= newArr[0]) {
      newArr.unshift(numArr[i]);
    } else if (numArr[i] >= newArr[i-1]) {
      newArr.push(numArr[i]);
    } else {
      var a = i-1;
      while(newArr[a] > numArr[i]) {
        a -= 1;
      }
      newArr.splice(a+1, 0, numArr[i]);
    }
  }
  return newArr;
}

function findMajority(numArr) {
  sortArr(numArr);
  var middle = newArr.length % 2;
  var medianInd = Math.ceil(newArr.length / 2) - 1;
  var median = newArr[medianInd];
  if (middle === 1 && newArr[0] === median) return 1;
  if (middle === 0 && newArr[0] === median && newArr[medianInd + 1] === median) return 1;
  return 0;
}

function readLine (line) {
  line = line.trim();
  if (line === '') {
    return;
  }

  var parts = line.toString().split(' ').map(function (x) { return parseInt(x, 10) });

  if (lineNum === 0) {
    num = parts[0];
  } else if (lineNum === 1){
    numArr = parts;
    console.log(findMajority(numArr));
    process.exit();
  }
  lineNum++;
}
