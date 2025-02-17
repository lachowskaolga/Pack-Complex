const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "XXXXXXXXXXXX@gmail.com",
    pass: "XXXXXXXXXXX",
  },
});

app.post("/send-mail", (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "pc.kontakt05@gmail.com",
    subject: `Wiadomość z formularza kontaktowego (Od ${email})`,
    text: `Wiadomość: ${message}\nAdres e-mail nadawcy wiadomości: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Wystapił błąd poczas wysyłania wiadomości:", error);
      return res
        .status(500)
        .json({ error: "Wystąpił błąd podczas wysyłania wiadomości." });
    } else {
      console.log("E-mail wysłany:", info.response);
      res.json({ success: true, message: "Wiadomość wysłana!" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
