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
var median = null;
var medianInd2 = null;

if (num !== numArr.length) return 'wrong input';

function sortArr(numArr) {
  numArr.sort(function (a, b) {
    return a - b;
  });
  return numArr;
}

function findMedian(numArr) {
  var middle = numArr.length % 2;
  var medianInd = Math.ceil(numArr.length / 2);
  var medianInd2 = medianInd - 1;
  median = numArr[medianInd];
  median2 = numArr[medianInd2];
  return median, median2;
}

function findMajority(numArr) {
  sortArr(numArr);
  findMedian(numArr);
  var counter = 0;
  var counter2 = 0;

  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] === median) {
      counter += 1;
    } else if (numArr[i] === median2) {
      counter2 += 1;
    }
  }
  if ((numArr.length / 2 + 1) > counter && (numArr.length / 2 + 1) > counter2) return 0;
  else return 1;
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
