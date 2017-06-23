var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);
var lineNum = 0;

var capacity = 0;
var bars = 0;
var matrix = [];

function fillMatrix(capacity, bars, weights) {
  for (var i = 0; i <= bars; i++) {
    for (var j = 0; j <= capacity; j++) {
      if (i === 0) matrix[0].push(0);
      if (j === 0) matrix[i].push(0);

      if (weights[i+1] > j) matrix[i+1].push(matrix[i][j]);

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
    capacity = parts[0];
    bars = parts[1];
  } else if (lineNum === 1) {
    var weights = parts;

    console.log('capacity ', capacity, 'bars ', bars, 'weights ', weights);

    process.exit();
  }
  lineNum++;
}
