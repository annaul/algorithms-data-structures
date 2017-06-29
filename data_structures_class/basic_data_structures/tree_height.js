var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function computeTreeHeight(arr) {
  var depth = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      depth.push(1);
    } else {
      depth.push(-1);
    }
  }

  // var stepsNum = [];
//  var nodes = [];
  var longest = 0;

  for (var i = 0; i < arr.length; i++) {
    var node = i;//arr[i];
    var steps = 0;//1 ;

    // if (node === -1) { stepsNum.push(1);  nodes.push(-1); continue;}
//    if (nodes.indexOf(node) !== -1) continue;

    while (/*nodes.indexOf(node) === -1 && node !== -1*/ depth[node] === -1) {
      node = arr[node];
      steps += 1;
    }
    steps += depth[node];
    depth[i] = steps;

    // if (stepsNum.length === 0) {
    //   steps = steps;
    // } else if (node === -1) {
    //   steps += stepsNum[nodes.indexOf(node)] + 1;
    // } else {
    //   steps += stepsNum[nodes.indexOf(node)] - 1;
    // }

    if (steps > longest) longest = steps;
    //console.log('i ', i, '| ', 'el ', arr[i], 'steps ', steps);
    // stepsNum.push(steps);
    // nodes.push(arr[i]);
  }
  return longest;
}

var lineNum = 0;
function readLine (line) {
  line = line.trim();
  if (line === '') {
    return;
  }

  var parts = line.toString().split(' ').filter((s)=>(s!=='')).map(function (x) { return parseInt(x, 10) });

  if (lineNum === 0) {
    var numNodes = parts[0];
  } else if (lineNum === 1){
    var nodeArr = parts;

    console.log(computeTreeHeight(nodeArr));

    process.exit();
  }
  lineNum++;
}
