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

function siftDown(arr, i) {
  if (2 * i + 2 < arr.length) {
    if (arr[i] > arr[2 * i + 2] && arr[2 * i + 1] > arr[2 * i + 2]) {
      var temp2 = arr[i];
      arr[i] = arr[2 * i + 2];
      arr[2 * i + 2] = temp2;

      swaps.push(i, 2 * i + 2);

      siftDown(arr, 2 * i + 2);
    }
  }
  if (2 * i + 1 < arr.length) {
    if (arr[i] > arr[2 * i + 1] &&
        (2 * i + 2 >= arr.length || arr[2 * i + 1] < arr[2 * i + 2])) {
      var temp1 = arr[i];
      arr[i] = arr[2 * i + 1];
      arr[2 * i + 1] = temp1;

      swaps.push(i, 2 * i + 1);

      siftDown(arr, 2 * i + 1);
    }
  }
}

function makeHeap(arr) {
  for (var i = arr.length - 1; i >= 0; --i) {
    siftDown(arr, i);
  }
  return swaps;
}

function displayResult(swaps) {
  if (swaps.length === 0) {
    console.log(swaps.length);
  } else {
    console.log(swaps.length / 2);
    for (var i = 0; i < swaps.length; i += 2) {
      console.log(swaps[i], swaps[i+1]);
    }
  }
  return;
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

    displayResult(makeHeap(arr));

    process.exit();
  }
  lineNum++;
}
