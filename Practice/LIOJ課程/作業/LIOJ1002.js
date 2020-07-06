
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

function solve(lines) {
	for(var i=0; i<lines.length; i++){
		var line = lines[i]         //[1,1]
		var temp = line.split(' ')  //[1],[1]
		if(Number(temp[0])===0 && Number(temp[1])===0){
			console.log(' ')
		}else if(Number(temp[0])>=Number(temp[1])){
			console.log(Number(temp[0]))
		}else if(Number(temp[0])<Number(temp[1])){
			console.log(Number(temp[1]))
		}	
	}
}
