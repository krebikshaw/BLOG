
const request = require('request')
let username = 'admin'
let password = 'admin123'
let base64str = Buffer.from(`${username}:${password}`).toString('base64')
//console.log(base64str)

var obj = {
	url:'https://lidemy-http-challenge.herokuapp.com/api/v2/me',
	headers:{
		'Authorization':`Basic ${base64str}`
	}
}

function callback(err, response, body){
	console.log(err)
	console.log(JSON.parse(body))
}

request(obj, callback)
