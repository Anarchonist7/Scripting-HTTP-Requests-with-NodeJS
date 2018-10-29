module.exports = function getHTML (options, callback) {
  var https = require('https');
  var body = '';

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      body += chunk;

    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(body);
    });
  });



};



