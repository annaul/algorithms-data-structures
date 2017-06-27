var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

var lineNum = 0;

var numItems;
var knapsackCapacity;
var items = [];
var sortedItems = [];

function solution(numItems, knapsackCapacity, items) {
  sortArray(items);
  var totalValue = 0;
  for (var i = 0; i < sortedItems.length; i++) {
    if (knapsackCapacity - sortedItems[i][1] >= 0) {
      knapsackCapacity -= sortedItems[i][1];
      totalValue += sortedItems[i][0];
    } else if (knapsackCapacity - sortedItems[i][1] < 0) {
      totalValue += (knapsackCapacity / sortedItems[i][1]) * sortedItems[i][0];
      break;
    } else {
      break;
    }
  }
  return totalValue.toFixed(4);
}

function sortArray(items) {
  for (var i = 0; i < items.length; i++) {
    if (i === 0) sortedItems.push(items[i]);
    else if (items[i][0]/items[i][1] >= sortedItems[0][0]/sortedItems[0][1]) sortedItems.unshift(items[i]);
    else if (items[i][0]/items[i][1] <= sortedItems[i-1][0]/sortedItems[i-1][1]) sortedItems.push(items[i]);
    else {
      var a = i-1;
      while(items[i][1]/items[i][0] < sortedItems[a][1]/sortedItems[a][0]) {
        a -= 1;
      }
      sortedItems.splice(a+1, 0, items[i]);
    }
  }
  return sortedItems;
}


function readLine (line) {
  line = line.trim();
  if (line == '') {
    return;
  }

  var parts = line.toString().split(' ').map(function (x) { return parseInt(x, 10) });

  if (lineNum == 0) {
    numItems = parts[0];
    knapsackCapacity = parts[1];
  } else {
    items.push(parts)
    if (items.length == numItems) {
      console.log(solution(numItems, knapsackCapacity, items));
      process.exit();
    }
  }

  lineNum++;
}
