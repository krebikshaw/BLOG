const request = require('request')
let username = 'admin'
let password = 'admin123'
let base64str = Buffer.from(`${username}:${password}`).toString('Base64')

let obj = {
	url:'https://lidemy-http-challenge.herokuapp.com/api/v2/books/89',
	headers:
	{
		'Authorization':`Basic ${base64str}` 
	}
}

function callback(error, response, body){
	console.log(JSON.parse(body))
}

request.delete(obj, callback)