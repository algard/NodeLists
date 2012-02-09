var http = require("http");

function start() {
    var counter;
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello what's up visitor #" + counter++);
    response.end();
  }

  http.createServer(onRequest).listen(process.env.C9_PORT);
  console.log("Server has started.");
}

exports.start = start;