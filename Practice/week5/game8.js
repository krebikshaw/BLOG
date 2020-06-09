const request = require('request')
let username = 'admin'
let password = 'admin123'
let base64str = Buffer.from(`${username}:${password}`).toString('base64')
let str = '我'
let uri = encodeURI(`https://lidemy-http-challenge.herokuapp.com/api/v2/books?q=${str}`)

var obj = {
	uri,
	headers:
	{
		'Authorization': `Basic ${base64str}`
	}
}

function callback(error, response, body){
	console.log(JSON.parse(body))
}

//request.get(obj, callback)
/*
 {
    id: 72,
    name: '日日好日：茶道教我的幸福15味【電影書腰版】',
    author: '森下典子',
    ISBN: '9981835427'
  }
*/

var obj_patch = {
	url:'https://lidemy-http-challenge.herokuapp.com/api/v2/books/72',
	form:
	{
		name:'日日好日：茶道教我的幸福15味【電影書腰版】',
		ISBN: '9981835423'
	},
	headers:{
		'Authorization': `Basic ${base64str}`
	}
}

request.patch(obj_patch, callback)