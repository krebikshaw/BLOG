const request = require('request')

request.post(
	{
		url:'https://lidemy-http-challenge.herokuapp.com/api/books',
		form:
		{
			name: '《大腦喜歡這樣學》',
			ISBN: 9789863594475
		}
	},
	function(err, response, body){
		console.log("response", response)
		console.log("body", body)
	}
)