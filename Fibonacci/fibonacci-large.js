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
      if (n <= 1) return n;
      var arr = [0, 1];

      for (var i = 2; i < n; i++) {
        var newNum = arr[i-2] + arr[i-1];
        arr.push(newNum % 10);
      }
      var fibN = (arr[n-1] + arr[n-2]) % 10;
      return fibN;
    }
    var result = fibonacci(n);
    console.log(result);

    process.exit();
  }
}
