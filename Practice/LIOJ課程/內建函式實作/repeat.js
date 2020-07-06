function repeat(str, n){
	let str_aft = ''
	for(var i=0; i<n; i++){
		str_aft += str
	}
	return str_aft
}

let abc = 'abc'
console.log(repeat(abc,3))