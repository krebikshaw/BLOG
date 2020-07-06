var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines){

}


1  3  5  7  9  11 13 15 17 19 21 23 25 27 29
2  4  6  8  10 12 14 16 18 20 22 24 26 28 30

12 13 34 35 56 57 78 24 46 48

4 5
34 35 56 57 24 46