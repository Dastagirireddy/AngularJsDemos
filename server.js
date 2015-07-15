var express = require('express'),
	app = express();

app.use(express.static(__dirname));	

app.get('/custom-directive', function(req, res){

	res.sendfile('custom-directives.html')
});

app.listen(3000, function(){

	console.log("Server is running on port 3000");
});