// Set up server
const express = require("express");
const dotenv = require("dotenv");
// Set up port
const PORT = process.env.PORT || 4001;
// Invoking express
const app = express();
// load environmental variables
dotenv.config();

// Middleware to parse JSON requests
app.use(express.json());

// Set up first get route
app.get("/", (req, res) => {
  res.send("<h1>Hello, <b>home</b>!</h1>");
});

// Set up server status page
app.get("/api/status", (req, res) => {
  res.send("<h1>Server <b>status is OK</b>.</h1>");
});

// Set up users page
app.get("/api/users", (req, res) => {
  res.send("<h1>List <b>of Users</b>.</h1>");
});

// Set up blog page
app.get("/api/blogs", (req, res) => {
  res.send("<h1>Blog <b>Posts</b>.</h1>");
});

// Set up :key req
app.get("/:key", (req, res) => {
  console.log(req.params);
});

// Set up :page req
app.get("/api/:page", (req, res) => {
  console.log(req.params);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
