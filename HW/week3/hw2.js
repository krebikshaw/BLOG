/*
hw2 大小寫互換
*/

function transform(str){
	var result = ""
	for(let i=0; i<str.length; i++){
		if(str[i]>='A' && str[i]<='Z'){
			result += str[i].toLowerCase()
		}else if(str[i]>='a' && str[i]<='z'){
			result += str[i].toUpperCase()
		}else{
			result += str[i]
		}
	}
	return result
}


module.exports = transform