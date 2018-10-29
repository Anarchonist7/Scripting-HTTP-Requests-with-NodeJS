var https = require('https');

function getAndPrintHTML (options) {

  var body = '';

  https.get(options, function (response) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);