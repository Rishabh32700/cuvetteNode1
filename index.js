const { createServer } = require("node:http");
const {fs} = require("fs")

const hostname = "127.0.0.1";
const port = 3000;


const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world bye bye tatata  change reflect huye?");
});
console.log(server);

server.listen(port, hostname)


// API
