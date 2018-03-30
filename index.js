/**
 * The main module which creates the HTTP server.
 */
var http = require('http');
var httpPort = 8123;

/**
 * Output the HTML head to the HTTP response.
 */
function writeHead(response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<!DOCTYPE HTML>');
    response.write('<html>');
    response.write('<head>');
    response.write('<title>Home Page</title>');
    response.write('</head>');
    response.write('<body>');
}

/**
 * Output the footer to the HTTP response.
 */
function writeFooter(response) {
    response.write('</body>');
    response.write('</html>');
}

/**
 * Output the home page content to the HTTP response.
 */
function writeHTTPContent(request, response) {
    writeHead(response);
    response.write('<article class="hello-world">Hello World!</article>');
    writeFooter(response);
    response.end();
}

module.exports = writeHTTPContent;

// Export HTTP server as a module to make it possible for tests to use the server.
if (!module.parent) {
    http.createServer(writeHTTPContent).listen(httpPort, function () {
        console.log('HTTP server is listening on port ' + httpPort);
    });
}
