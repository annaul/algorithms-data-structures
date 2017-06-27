var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);
var lineNum = 0;

var openBrackets = ['{', '[', '('];
var closeBrackets = ['}', ']', ')'];

function findMisMatch(input) {
  var tempStack = [];

  for (var i = 0; i < input.length; i++) {
    console.log('i ', i, 'input ', input, 'length ', input.length, 'tempStack ', tempStack);
    var closeInp = closeBrackets.indexOf(input[i]);
    var openInp = openBrackets.indexOf(input[i]);
    var openStack = openBrackets.indexOf(tempStack[tempStack.length-1]);
    console.log('closeInp ', closeInp, 'openInp ', openInp, 'openStack ', openStack);

    if (openInp !== -1) {
      tempStack.push(input[i]);
      console.log('push');
    } else if (closeInp !== -1){
      if (openStack === closeInp && openStack !== -1 && closeInp !== -1) {
        console.log('pop ', tempStack);
        tempStack.pop();
      } else {
        console.log('out on ', i);
        return i+1;
      }
    }

  }
  if (tempStack.length === 0) return 'success';
}


function readLine (line) {
  line = line.trim();
  if (line === '') {
    return;
  }

  if (lineNum === 0) {
    var input = line.toString().split('').filter((s)=>(s!==''));

    console.log('index ', findMisMatch(input));

    process.exit();
  }
  lineNum++;
}
