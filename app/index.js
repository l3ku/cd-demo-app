/**
 * @file The main module which creates the HTTP server.
 */
var http = require('http');
var httpPort = 8888;

/**
 * Output the HTML head to the HTTP response.
 *
 * @param {{object}} response - A reference to the HTTP response that will be sent to the browser.
 */
function writeHead(response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<!DOCTYPE HTML><html><head><title>CD Demo App</title></head><body>');
}

/**
 * Output the footer to the HTTP response.
 *
 * @param {object} response - A reference to the HTTP response that will be sent to the browser.
 */
function writeFooter(response) {
    response.write('<p>&copy; Leo Toikka 2018 </p>');
    response.write('</body></html>');
}

/**
 * Output the home page content to the HTTP response.
 *
 * @param {object} request - A reference to the HTTP request that was sent to the web server.
 * @param {object} response - A reference to the HTTP response that will be sent to the browser.
 */
function writeHTTPContent(request, response) {
    writeHead(response);
    response.write('<h1 class="page-title">Continuous Delivery Demo Application</h1>');
    response.write('<p class="page-description">This is a demo app that I use for Continuous Delivery pipeline demonstration purposes.</p>');
    response.write('<small class="page-ps">P.S. Check the <a class="github-link" href="https://github.com/l3ku/cd-demo-app">GitHub repo</a> for details</small>');
    writeFooter(response);
    response.end();
}

http.createServer(writeHTTPContent).listen(httpPort, function () {
    console.log('HTTP server is listening on port ' + httpPort);
});
