var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);
var lineNum = 0;

var steps = [0, 0];
var history = [0, 0];
var interNums = [];

function fillArrays(num) {
  for (var i = 2; i < num + 1; i++) {
    let steps3 = null;
    let steps2 = null;
    let steps1 = 0;
    if (i % 3 === 0) {
      steps3 = steps[i/3] + 1;
    }
    if (i % 2 === 0) {
      steps2 = steps[i/2] + 1;
    }
    steps1 = steps[i-1] + 1;
    if (steps3 !== null && (steps2 === null || steps3 <= steps2) && steps3 <= steps1) {
      steps.push(steps3);
      history.push(i/3);
    } else if (steps2 !== null && (steps3 === null || steps2 <= steps3) && steps2 <= steps1) {
       steps.push(steps2);
       history.push(i/2);
    } else {
      steps.push(steps1);
      history.push(i-1)
    }
  }
  return steps, history;
}

function findIntermidiate(num) {
  fillArrays(num);
  var tempNum = num;
  interNums.push(tempNum);

  while (tempNum !== 1) {
    tempNum = history[tempNum];
    interNums.push(tempNum);
  }
  return interNums.reverse();
}

function result(interNums) {
  var printOut = 1 + ' ';
  for (var i = 1; i < interNums.length; i++) {
    printOut += interNums[i] + ' ';
  }
  return printOut;
}

function readLine (line) {
  line = line.trim();
  if (line === '') {
    return;
  }

  var parts = line.toString().split(' ').filter((s)=>(s!=='')).map(function (x) { return parseInt(x, 10) });

  if (lineNum === 0) {
    var num = parts[0];
    findIntermidiate(num);
    console.log(steps[steps.length - 1]);
    // console.log('interNums ', interNums);
    console.log(result(interNums));
    // console.log('steps ', steps);
    // console.log('history ', history);
    process.exit();
  }
  lineNum++;
}
