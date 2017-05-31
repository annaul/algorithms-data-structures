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

function maxRevenue(numAds, profitPerClick, clicksPerDay) {
  profitPerClick = profitPerClick.sort().reverse();
  clicksPerDay = clicksPerDay.sort().reverse();
  var value = 0;

  for (var i = 0; i < numAds; i++) {
    value += profitPerClick[i] * clicksPerDay[i];
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
