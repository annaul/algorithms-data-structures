var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var m = parseInt(line.toString().split(' ')[0], 10);

    function change(m) {
      var i = 0;

      while (m >= 10) {
        m -= 10;
        i += 1;
      }
      while (m >= 5) {
        m -= 5;
        i += 1;
      }
      while (m > 0) {
        m -= 1;
        i += 1;
      }
      return i;
    }


    console.log(change(m));

    process.exit();
  }
}
