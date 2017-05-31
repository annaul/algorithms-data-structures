var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);
var lineNum = 0;

var numAds;
var profitPerClick = [];
var clicksPerDay = [];

function orderReverse (array) {
  array.sort(function(a, b) {
  return b - a;
});
}

function maxRevenue(numAds, profitPerClick, clicksPerDay) {
  orderReverse(profitPerClick);
  orderReverse(clicksPerDay);
  var value = 0;
  for (var i = 0; i < numAds; i++) {
    if (profitPerClick.length === 0 || clicksPerDay.length === 0) break;
    value += profitPerClick[0] * clicksPerDay[0];
    profitPerClick.shift();
    clicksPerDay.shift();
  }
  return value;
}

function readLine (line) {
  line = line.trim();
  if (line == '') {
    return;
  }

  var parts = line.toString().split(' ').map(function (x) { return parseInt(x, 10) });

  if (lineNum === 0) {
    numAds = parts[0];
  } else if (lineNum === 1){
    profitPerClick = parts;
  } else if (lineNum === 2){
    clicksPerDay = parts;
    console.log(maxRevenue(numAds, profitPerClick, clicksPerDay));
    process.exit();
  }
  lineNum++;
}
