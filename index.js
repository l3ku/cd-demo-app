/**
 * The main module which creates the HTTP server.
 */
const http = require('http');
const httpPort = 8123;

/**
 * Output the HTML head to the HTTP response.
 */
function getHead(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
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
function getFooter(request, response) {
  response.write('</body>');
  response.write('</html>');
}

/**
 * Output the home page content to the HTTP response.
 */
function getHomeContent(request, response) {
  getHead(request, response);
  response.write('<article class="hello-world">Hello World!</article>');
  getFooter(request, response);
  response.end();
}

module.exports = getHomeContent;

// Export HTTP server as a module to make it possible for tests to use the server.
if ( !module.parent ) {
  http.createServer(getHomeContent).listen(httpPort, function() {
    console.log('HTTP server is listening on port ' + httpPort);
  });
}
