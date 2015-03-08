var express = require('express')
var app = express()


// accept GET request at /gets
app.get('/gets', function (req, res) {
	var resMessage = 'Got a GET request at /gets';
	
	if(JSON.stringify(req.headers) != '{}')
	{
		resMessage += '\nAll header parameter pairs: ' + JSON.stringify(req.headers);
	}
	else
	{
		resMessage += '\nThe request contained no header parameter pairs';
	}
	
	if(JSON.stringify(req.query) != '{}')
	{
		resMessage += '\nAll query parameter pairs: ' + JSON.stringify(req.query);
	}
	else
	{
		resMessage += '\nThe request contained no query parameter pairs';
	}
	
	res.send(resMessage);
})

// accept PUT request at /puts
app.put('/puts', function (req, res) {
  var resMessage = 'Got a PUT request at /puts';
	
	if(JSON.stringify(req.headers) != '{}')
	{
		resMessage += '\nAll header parameter pairs: ' + JSON.stringify(req.headers);
	}
	else
	{
		resMessage += '\nThe request contained no header parameter pairs';
	}
	
	if(JSON.stringify(req.query) != '{}')
	{
		resMessage += '\nAll query parameter pairs: ' + JSON.stringify(req.query);
	}
	else
	{
		resMessage += '\nThe request contained no query parameter pairs';
	}
	
	res.send(resMessage);
})

// accept POST request at /posts
app.post('/posts', function (req, res) {
  var resMessage = 'Got a POST request at /posts';
	
	if(JSON.stringify(req.headers) != '{}')
	{
		resMessage += '\nAll header parameter pairs: ' + JSON.stringify(req.headers);
	}
	else
	{
		resMessage += '\nThe request contained no header parameter pairs';
	}
	
	if(JSON.stringify(req.query) != '{}')
	{
		resMessage += '\nAll query parameter pairs: ' + JSON.stringify(req.query);
	}
	else
	{
		resMessage += '\nThe request contained no query parameter pairs';
	}
	
	res.send(resMessage);
})

// accept DELETE request at /deletes
app.delete('/deletes', function (req, res) {
  var resMessage = 'Got a DELETE request at /deletes';
	
	if(JSON.stringify(req.headers) != '{}')
	{
		resMessage += '\nAll header parameter pairs: ' + JSON.stringify(req.headers);
	}
	else
	{
		resMessage += '\nThe request contained no header parameter pairs';
	}
	
	if(JSON.stringify(req.query) != '{}')
	{
		resMessage += '\nAll query parameter pairs: ' + JSON.stringify(req.query);
	}
	else
	{
		resMessage += '\nThe request contained no query parameter pairs';
	}
	
	res.send(resMessage);
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Listening at http://%s:%s', host, port)

})