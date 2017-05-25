var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var n = parseInt(line.toString().split(' ')[0], 10);

    function fibonacci(n) {
      if (n === 0 || n === 1) return n;
      var arr = [0, 1];

      for (var i = 2; i < n; i++) {
        arr.push(arr[i-2] + arr[i-1])
      }
      return arr[n];
    }
    var result = fibonacci(n);
    console.log(result);

    process.exit();
  }
}
