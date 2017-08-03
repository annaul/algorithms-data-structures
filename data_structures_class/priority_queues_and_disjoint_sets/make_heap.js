var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);
var lineNum = 0;
var num;
var arr = [];
var swaps = [];

function makeHeap(arr) {
  for (var i = arr.length - 1; i >= 0; --i) {
    if (2 * i + 1 <= arr.length) {
      if (arr[i] > arr[2 * i + 1]) {
        var temp1 = arr[i];
        arr[i] = arr[2 * i + 1];
        arr[2 * i + 1] = temp1;

        swaps.push(i, 2 * i + 1);
      }
    }
    if (2 * i + 2 <= arr.length) {
      if (arr[i] > arr[2 * i + 2]) {
        var temp2 = arr[i];
        arr[i] = arr[2 * i + 2];
        arr[2 * i + 2] = temp2;

        swaps.push(i, 2 * i + 2);
      }
    }
  }
  return swaps;
}

function displayResult(arr) {
  for (var i = 0; i <= arr.length/2; i += 2) {
    console.log(arr[i], arr[i+1]);
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
    arr = parts;

    makeHeap(arr);
    console.log(swaps.length / 2);
    if (swaps.length > 0) {
      displayResult(makeHeap(arr));
    }
    process.exit();
  }
  lineNum++;
}
