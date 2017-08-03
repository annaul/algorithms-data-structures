var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);
var lineNum = 0;
var num;
var swaps = [];

function siftUp(max, min) {
  var hold = min;
  min = max;
  max = hold;
}

function makeHeap(arr) {
  for (var i = 0; i <= arr.length; i++) {

    if (2 * i + 1 <= arr.length) {
      if (arr[i] > arr[2 * i + 1]) {
        siftUp(arr[i], arr[2 * i + 1]);
        swaps.push(arr[i], arr[2 * i + 1]);
      }
    }
    if (2 * i + 2 <= arr.length) {

    }
  }
}


function readLine (line) {
  line = line.trim();
  if (line === '') {
    return;
  }

  var parts = line.toString().split(' ').filter((s)=>(s!=='')).map(function (x) { return parseInt(x, 10) });

  if (lineNum === 0) {
    num = parts[0];
  } else if (lineNum === 1){
    var arr = parts;
    console.log(num, arr);

    process.exit();
  }
  lineNum++;
}
