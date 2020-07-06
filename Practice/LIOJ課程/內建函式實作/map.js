function double(n){
	return n*2
}


let arr = [1,2,3]
let arr_aft = arr.map(double)

console.log(arr_aft)


function map(arr, callback){
	let result = []
	for(var i=0; i<arr.length; i++){
		result[i] = callback(arr[i])
	}
	return result
}