var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);
var lineNum = 0;
var numThreads;
var jobs;
var times;
var threads = [];
var output = [];

function fillThreads(val) {
  for (i = 0; i < val; i++) {
    threads.push([i, 0]);
  }
}

function lessThan(a, b) { // true if a < b
  if (a[1] < b[1])
    return true;
  if (a[1] === b[1])
    return a[0] < b[0];
  return false;
}

function siftDown(arr, i) {
  if (2 * i + 2 < arr.length) {
    if (lessThan(arr[2 * i + 2], arr[i]) && lessThan(arr[2 * i + 2], arr[2 * i + 1])) {
      var temp2 = arr[i];
      arr[i] = arr[2 * i + 2];
      arr[2 * i + 2] = temp2;

      siftDown(arr, 2 * i + 2);
    }
  }
  if (2 * i + 1 < arr.length) {
    if (lessThan(arr[2 * i + 1], arr[i]) &&
        (2 * i + 2 >= arr.length || lessThan(arr[2 * i + 1], arr[2 * i + 2]))) {
      var temp1 = arr[i];
      arr[i] = arr[2 * i + 1];
      arr[2 * i + 1] = temp1;

      siftDown(arr, 2 * i + 1);
    }
  }
}

function processJobs(times, threads) {
  for (i = 0; i < times.length; i++) {
    output.push(threads[0][0], threads[0][1]);
    threads[0][1] += times[i];
    siftDown(threads, 0);
  }
  return output;
}

function displayResult(arr) {
  for (var i = 0; i < arr.length; i += 2) {
    console.log(arr[i], arr[i+1]);
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
    numThreads = parts[0];
    jobs = parts[1];
  } else if (lineNum === 1){
    times = parts;

    fillThreads(numThreads);
    processJobs(times, threads);
    displayResult(output);

    process.exit();
  }
  lineNum++;
}
