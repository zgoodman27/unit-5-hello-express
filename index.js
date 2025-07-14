// Set up server
const express = require(express);
const dotenv = require("dotenv");
// Set up port
const port = process.env.port || 8080;
// Invoking express
const app = express();
// load environmental variables
dotenv.config();

// Middleware to parse JSON requests
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
