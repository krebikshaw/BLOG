/*
hw2
首字母大寫，若首字母不是英文則忽略
*/

function capitalize(str){
  var result = ""
  if(str[0]>="a" && str[0]<="z"){
    result += str[0].toUpperCase()	
  }else{
    result += str[0]
  }
  for(let i=1; i<str.length; i++){
    result += str[i]
  }
  return result
}


console.log(capitalize(",nick"))
