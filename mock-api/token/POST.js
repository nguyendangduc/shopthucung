const fs = require("fs");
const path = require("path");

module.exports = (request, response) => {
  const filePath = path.join(__dirname, "POST.json");
  const fsContent = fs.statSync(filePath);
  response.writeHead(200, {
    "Content-Length": fsContent.size,
    "Content-Type": "application/json",
  });
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(response);
};
