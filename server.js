// Ionic Creator preview nodejs server

var express = require('express');
var request = require('request');

var app = express();

// Serve static html & js & css files
app.use('/', express.static(__dirname ));

// Serve dynamic creator preview using Ionic API
app.get('/creator/:creatorId', function(req, res){
  
  var creatorId = req.param('creatorId');
  if(creatorId !== 'undefined') {
    request.get('https://apps.ionic.io/api/v1/creator/'+req.param('creatorId')+'/download/html').pipe(res);
  }

});

app.listen(3000, '0.0.0.0');
