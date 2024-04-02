const restify = require('restify');
const fs = require('fs');

// Create a server
const server = restify.createServer({
  name: 'Demo Server'
});

// Read HTML and CSS files
const htmlContent = fs.readFileSync('./index.html', 'utf8');
const cssContent = fs.readFileSync('./styles.css', 'utf8');

// Add a route
server.get('/', (req, res, next) => {
  res.setHeader('content-type', 'text/html');
  res.write(htmlContent);
  res.end();
  next();
});

// Set up server to listen on port 3000
server.listen(3000, () => {
  console.log('%s listening at %s', server.name, server.url);
});
