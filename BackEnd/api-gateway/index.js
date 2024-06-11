// api-gateway/index.js

const express = require("express");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer();
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Received request for ${req.url}`);
  next();
});

// Route requests to the auth service
app.use("/auth", (req, res) => {
  console.log("Routing to auth service");
  proxy.web(req, res, { target: "http://127.0.0.1:8002" });
});

// Route requests to the community service
app.use("/community", (req, res) => {
  console.log("Routing to community service");
  proxy.web(req, res, { target: "http://127.0.0.1:8003" });
});

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

// Start the server
const port = process.env.PORT || 8001;
app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}`);
});
