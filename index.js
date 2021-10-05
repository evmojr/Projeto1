var http = require('http');
var fs = require('fs');
const PORT = process.env.PORT || 5000

function  RequestResponse(req, res) {
  	fs.readFile('index.html',  function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}

http.createServer(RequestResponse).listen(PORT);

