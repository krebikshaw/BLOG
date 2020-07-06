function lastIndexOf(arr, target){
	for(var i=arr.length-1; i>0; i--){
		if(arr[i] === target){
			return i
		}
	}	
	return -1
}

console.log(lastIndexOf([1,2,3,4,5,1,3,2,1], 1))