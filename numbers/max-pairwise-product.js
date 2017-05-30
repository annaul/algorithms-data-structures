var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

var nline = 0;
var nelements = 0;

function readLine (line) {
  line = line.trim();

  if (line === "") {
    return;
  }

  if (nline === 0) {
    nline++;
    nelements = parseInt(line);
  } else {
    elements = line.split(' ').map((x) => (parseInt(x, 10)));
    if (elements.length !== nelements) {
      console.error("Invalid number of elements");
      process.exit(1);
    }

    findMaxProduct(elements);
    process.exit();
  }
}

function findMaxProduct(array) {

  var max1 = null; var max2 = null;

  for (var i = 0; i < array.length; i++) {
    if (array[i] >= max1) {max2 = max1; max1 = array[i];}
    if (array[i] < max1 && array[i] > max2) max2 = array[i];
  }
  console.log(max1 * max2);
}
