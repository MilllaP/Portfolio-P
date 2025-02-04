const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const router = express.Router();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});

// add .env file to root of project with the following:
// EMAIL_USER=your-email@gmail.com
// EMAIL_PASS=your-app-password
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/send", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "My Portfolio - Contact Form",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ error });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

app.on("clientError", (err, socket) => {
  console.error("Client error:", err);
  socket.destroy();
});
