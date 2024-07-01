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
app.post("/api/contact", async(req, res) => {
  const { name, email, message } = req.body;
  try {
    const result = await mailgun.sendEmail('contact',name, email, message);
      return res
        .status(200)
        .json({
          success: true,
          message: "Your message has been sent successfully!",
        });
    
  } catch (error) {
     console.log(error);
     return res
        .status(500)
        .json({
          success: false,
          message: "Something went wrong. Please try again later.",
        });
    
  }

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
