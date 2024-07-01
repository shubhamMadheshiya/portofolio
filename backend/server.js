require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const corsOptions = require("./src/config/corsOptions");
const keys = require("./src/config/keys");
const mailgun = require("./src/services/mailgun");



const PORT = keys.port;

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());


// Route to handle form submission
app.use("/", require("./src/router/root"));
app.post("/api/contact", require("./src/router/contact"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
