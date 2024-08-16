const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else if (req.url === "/contact") {
    res.end("Contact page");
  } else if (req.url === "/api") {
    fs.readFile("./Companydata.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to read data" }));
        return;
      }

      const ibj = JSON.parse(data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(ibj[0])); // You can change the response as needed
      
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 page does not exist</h1>");
  }
});

server.listen(8001, () => {
  console.log("Server running on port 8001");
});
