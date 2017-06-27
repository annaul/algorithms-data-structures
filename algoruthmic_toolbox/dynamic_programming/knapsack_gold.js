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

function firstRow(capacity) {
  matrix.push([]);
  for (var i = 0; i < capacity+1; i++) {
    matrix[0].push(0);
  }
}

function fillMatrix(capacity, bars, weights) {
  firstRow(capacity);
  for (var i = 1; i <= bars; i++) {
    for (var j = 0; j <= capacity; j++) {
      if (j === 0) { matrix.push([0]); continue; }
      var curBar = weights[i-1];
      var above = matrix[i-1][j];
      var back = matrix[i-1][j-curBar];
      if (curBar > j) {matrix[i].push(above); continue;}

      if (above > back + curBar) {
        matrix[i].push(above)
      } else {
        matrix[i].push(back + curBar);
      }
    }
  }
  return matrix;
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

    fillMatrix(capacity, bars, weights);
    console.log(matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1]);

    process.exit();
  }
  lineNum++;
}
