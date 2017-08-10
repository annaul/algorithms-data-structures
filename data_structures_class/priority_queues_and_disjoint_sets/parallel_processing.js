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
    var times = parts;

    console.log(numThreads, jobs, times);

    process.exit();
  }
  lineNum++;
}
