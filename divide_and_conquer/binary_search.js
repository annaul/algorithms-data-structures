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
var indiciesArr = [];
var ind = null;

if (numEl1 !== numEl2) return 'wrong input';
if (numEl1 !== orderedArr.length) return 'wrong input';
if (numEl2 !== randomArr.length) return 'wrong input';

function iterate(arr1, num) {
  var lower = 0;
  var upper = arr1.length - 1;


  while (lower <= upper) {
    ind = Math.floor((lower + upper) / 2);
    if ( arr1[ind] < num) {
      lower = ind + 1;
    } else if (arr1[ind] > num) {
      upper = ind - 1;
    } else {
      return indiciesArr.push(ind);
    }
  }

  return indiciesArr.push(-1);
}

function goThruRandomArr (orderedArr, randomArr) {
  for (var i = 0; i < randomArr.length; i++) {
    iterate(orderedArr, randomArr[i]);
  }
  return indiciesArr = indiciesArr.join(' ');
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
    console.log(goThruRandomArr (orderedArr, randomArr));
    process.exit();
  }
  lineNum++;
}
