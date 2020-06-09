/*
hw3
反轉字串
*/

function reverse(str){
  var result = ""
  for(let i=str.length-1; i>=0; i--){
    result += str[i]
  }
  return result
}

console.log(reverse("1abc2"))


