var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);
var lineNum = 0;

// var obj = arr.find(function (obj) { return obj.a === 7, arr.indexOf(obj); });
var depth = [];

function createLinkedList(arr) {
  var tree = [];
  for (var i = 0; i < arr.length; i++) {
    tree.push({ key: i, value: arr[i]})
  }
  console.log('tree 1', tree);
  return tree;
}

function findHight(arr) {
  var tree = createLinkedList(arr);
  var node = tree.find(function(node) { return node.value === -1; });
  console.log('node ', node);
  depth.push([node.key]);
  tree.splice(tree.indexOf(node), 1);
  console.log('tree 2', tree);
  console.log('depth ', depth);

  for (var i = 0; i < depth[0].length; i++) {
    var tempArr = [];

    depth.push(tempArr);
    console.log('depth ', depth, 'tree ', tree);
  }


  return depth.length;
}

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

    console.log('result ', findHight(nodeArr));

    process.exit();
  }
  lineNum++;
}
