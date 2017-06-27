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
    var m = parseInt(line.toString().split(' ')[1], 10);

    function fibonacci(n) {

      if (n < 2) {
        return 1;
      } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
      }
    }

    //   var mLength = m.toString().length;
    //   console.log(mLength);
    //
    //   var num1 = 0;
    //   var num2 = 1;
    //   var num3 = null;
    //
    //   for (var i = 2; i < n; i++) {
    //     if (num1.toString().length > mLength) {
    //       num1 = parseInt(num1.toString().slice(-(mLength + 1), num1.toString().length));
    //     }
    //     if (num2.toString().length > mLength) {
    //       num2 = parseInt(num2.toString().slice(-(mLength + 1), num2.toString().length));
    //     }
    //     console.log(num1, num2);
    //     num3 = (num1 + num2) % m;
    //     num1 = num2 % m;
    //     num2 = num3 % m;
    //   }
    //   return (num1 + num2) % m;


    // var result = fibonacci(n, m);
    console.log(fibonacci(n));

    process.exit();
  }
}
