var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var body = '';

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      body += chunk;


    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(body);
    });
  });
}

getAndPrintHTML();