var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

var lineNum = 0;
var numEl1 = 0;
var orderedArr = [];
var numEl2 = 0;
var randomArr = [];
var ind = 0;
var indArr = [];
var tempValue = 0;
var tempArr = orderedArr;

if (numEl1 !== numEl2 || orderedArr.length !== randomArr.length) return 'wrong input';

function findIndex(tempArr, tempValue) {
  if ()
  ind = Math.ceil(tempArr.length/2);
}


function readLine (line) {
  line = line.trim();
  if (line === '') {
    return;
  }

  var parts = line.toString().split(' ').map(function (x) { return parseInt(x, 10) });

  if (lineNum === 0) {
    orderedArr = parts;
    numEl1 = orderedArr.shift();
  } else if (lineNum === 1){
    randomArr = parts;
    numEl2 = randomArr.shift();

    console.log('numEl1 ', numEl1, 'orderedArr ', orderedArr);
    console.log('numEl2 ', numEl2, 'randomArr ', randomArr);
    console.log('indicies array ', findIndices(orderedArr, randomArr));
    process.exit();
  }
  lineNum++;
}
