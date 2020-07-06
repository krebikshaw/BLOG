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

function solve(lines) {   //['5']
	for(var i=1; i<=Number(lines[0]); i++){    //第i排
		let print = ''
		for(var j=1; j<=(Number(lines[0])-i); j++){
			print += ' '
		}
		for(var k=1; k<=(2*i-1); k++){
			print += '*'
		}
		console.log(print)
	}
}



/*
第一層 > (n-1)空白+1個*
第i層 > (n-i)空白+2i-1
*/