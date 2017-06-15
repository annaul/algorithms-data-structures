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

if (num !== numArr.length) return 'wrong input';

function findMajority(numArr) {
  var newArr = numArr.slice(0).sort();
  var middle = newArr.length % 2;
  var median = newArr[Math.ceil(newArr.length / 2)];
  if (middle === 1 && newArr[0] === median) return 1;
  if (middle === 0 && newArr[0] === median && newArr[Math.ceil(newArr.length / 2) + 1]) return 1;
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
