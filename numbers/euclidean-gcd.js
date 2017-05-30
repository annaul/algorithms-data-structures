var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var a = parseInt(line.toString().split(' ')[0], 10);
    var b = parseInt(line.toString().split(' ')[1], 10);

    function findGCD(a, b) {

      if (b === 0) return a;
      var c = null;
      while (b !== 0) {
        c = a % b;
        a = b - c;
        b = c;
      }
      return a;
    }
    var result = findGCD(a,b);

    console.log(result)

    process.exit();
  }
}
