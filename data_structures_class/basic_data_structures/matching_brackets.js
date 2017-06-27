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
  var stillOpen = [];

  for (var i = 0; i < input.length; i++) {
    // console.log('i ', i, 'stillOpen ', stillOpen, 'input ', input, 'length ', input.length, 'tempStack ', tempStack);
    var closeInp = closeBrackets.indexOf(input[i]);
    var openInp = openBrackets.indexOf(input[i]);
    var openStack = openBrackets.indexOf(tempStack[tempStack.length-1]);
    // console.log('closeInp ', closeInp, 'openInp ', openInp, 'openStack ', openStack);

    if (openInp !== -1) {
      tempStack.push(input[i]);
      stillOpen.push(i+1);
      // console.log('push');
    } else if (closeInp !== -1){
      if (openStack === closeInp && openStack !== -1 && closeInp !== -1) {
        // console.log('pop ', tempStack);
        stillOpen.pop();
        tempStack.pop();
      } else {
        // console.log('out on ', i);
        return i+1;
      }
    }
  }
  if (stillOpen.length > 0) return stillOpen[0];
  if (tempStack.length === 0) return 'Success';
}


function readLine (line) {
  line = line.trim();
  if (line === '') {
    return;
  }

  if (lineNum === 0) {
    var input = line.toString().split('').filter((s)=>(s!==''));

    console.log(findMisMatch(input));

    process.exit();
  }
  lineNum++;
}
