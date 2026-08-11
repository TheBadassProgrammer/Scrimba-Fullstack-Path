import fs from "node:fs";
import path from "node:path";
import http from "node:http";

const __dirname = path.resolve();
const PORT = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
  const extname = path.extname(filePath);
  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  //route for handling investment data
  if (req.url === "/api/invest" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const investmentData = JSON.parse(body);

      //writing data to a file named data.txt
      const dataFilePath = path.join(__dirname, "data", "data.txt");
      fs.appendFile(dataFilePath, JSON.stringify(investmentData) + "\n", err => {
          if (err) {
              console.error("Error writing to file", err);
          }
      });

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Investment data received successfully" }));
    });
    return
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(content, "utf-8");
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });


});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});     

