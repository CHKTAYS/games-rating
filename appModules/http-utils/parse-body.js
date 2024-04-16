const { rejects } = require("assert");
const { resolve } = require("path");

function parseBody(req) {
  return new Promise((resolve, rejects) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      resolve(body);
    });
    req.on("error", (error) => {
      resolve(error);
    });
  });
}
module.exports = parseBody;
