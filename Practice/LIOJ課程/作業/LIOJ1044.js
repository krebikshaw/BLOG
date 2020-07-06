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

/*
字串在迴圈裡面改變，字串長度會改變，千萬記得要用字串長度當條件
必須先備份原本的長度下來當條件!!
*/

function solve(lines) {
	console.log(padEnd(lines[0],Number(lines[1]),lines[2]))
}

function padEnd(str, targetLength, padString){
	let str_length_fixed = str.length
	if(str_length_fixed >= targetLength){
		return str
	}else if(str_length_fixed < targetLength && targetLength-str_length_fixed < padString.length){
		for(let i=0; i<targetLength-str_length_fixed; i++){
			str += padString[i]
		}
		return str
	}else if(str_length_fixed < targetLength && targetLength-str_length_fixed >= padString.length){
		for(let i=0; i<padString.length; i++){	
			str += padString[i]
		}	
		str = padEnd(str, targetLength, padString)
		return str
	}
}

