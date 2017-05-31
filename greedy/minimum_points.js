var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

var lineNum = 0;

var numSegments;
var segments = [];
var numStops;
var stops = [];
var sortedSegmentsBy1 = [];
var sortedSegmentsBy0 = [];

function sortSegmentsBy0(segments) {
  for (var i = 0; i < segments.length; i++) {
    if (i === 0) sortedSegmentsBy0.push(segments[i]);
    else if (segments[i][0] <= sortedSegmentsBy0[0][0]) sortedSegmentsBy0.unshift(segments[i]);
    else if (segments[i][0] >= sortedSegmentsBy0[i-1][0]) sortedSegmentsBy0.push(segments[i]);
    else {
      var a = i-1;
      while(segments[i][0] < sortedSegmentsBy0[a][0]) {
        a -= 1;
      }
      sortedSegmentsBy0.splice(a+1, 0, segments[i]);
    }
  }
  return sortedSegmentsBy0;
}

function sortSegmentsBy1(segments) {
  for (var i = 0; i < segments.length; i++) {
    if (i === 0) sortedSegmentsBy1.push(segments[i]);
    else if (segments[i][1] <= sortedSegmentsBy1[0][1]) sortedSegmentsBy1.unshift(segments[i]);
    else if (segments[i][1] >= sortedSegmentsBy1[i-1][1]) sortedSegmentsBy1.push(segments[i]);
    else {
      var a = i-1;
      while(segments[i][1] < sortedSegmentsBy1[a][1]) {
        a -= 1;
      }
      sortedSegmentsBy1.splice(a+1, 0, segments[i]);
    }
  }
  return sortedSegmentsBy1;
}

function solution (segments) {
  sortSegmentsBy1(segments);
  sortSegmentsBy0(segments)

  var start = sortedSegmentsBy1[0][1];
  var end = sortedSegmentsBy0[sortedSegmentsBy0.length - 1][0];
  console.log(sortedSegmentsBy1[0][1]);
  console.log(sortedSegmentsBy0[sortedSegmentsBy0.length - 1][0]);

  var points = 1;
  
  return sortedSegmentsBy1;
}

function readLine (line) {
  line = line.trim();
  if (line == '') {
    return;
  }

  var parts = line.toString().split(' ').map(function (x) { return parseInt(x, 10) });

  if (lineNum == 0) {
    numSegments = parts[0];
  } else {
    segments.push(parts);
    if (segments.length === numSegments) {
      console.log('solution', solution(segments));
      console.log('sortedSegmentsBy1', sortedSegmentsBy1);
      console.log('sortedSegmentsBy0', sortedSegmentsBy0);
      process.exit();
    }
  }
  lineNum++;
}
