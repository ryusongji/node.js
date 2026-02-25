const express = require("express");
const path = require("path");

require("dotenv").config();
const mysql = require("./index");
const encrypto = require("./crypto");
const nodemailer = require("./nodemailer");
const { upload } = require("./multer");
const { excel_run } = require("./excel");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/api/customer", async (req, res) => {
  const result = await mysql.query("customerList");
  console.log(result);

  res.json(result);
});

// app.post("/api/customer", async (req, res) => {
//   const { name, email, phone } = req.body;
//   const result = await mysql.query("customerInsert", [name, email, phone]);
//   res.json(result);
// });

app.post("/api/customer", async (req, res) => {
  const { name, email, phone, passwd } = req.body;
  const hashPasswd = encrypto.createPassword(passwd);
  const result = await mysql.query("customerInsert", [
    { name, email, phone, passwd: hashPasswd },
  ]);
  res.json(result);
});

app.put("/api/customer", async (req, res) => {
  const { name, email, phone, id } = req.body;
  const result = await mysql.query("customerUpdate", [
    { name, email, phone },
    id,
  ]);
  res.json(result);
});

app.delete("/api/customer/:id", async (req, res) => {
  const { id } = req.params;
  const result = await mysql.query("customerDelete", [id]);
  res.json(result);
});

app.post("/api/login", async (req, res) => {
  const { email, plainTxt } = req.body;
  const [{ passwd }] = await mysql.query("customerSearch", [email]);
  // console.log("passwd -> ", passwd);
  console.log("result -> ", passwd);

  const success = encrypto.checkPassword(plainTxt, result);
  console.log("createPassword()-> ", encrypto.createPassword(plainTxt));

  res.json({ success });
});

app.post("/api/mail", upload.single("myfile"), async (req, res) => {
  const { from, to, subject, text } = req.body;
  console.log(req);

  const html = text
    .split("\n")
    .map((elem) => `<p>${elem}</p>`)
    .join("");

  let attachments;
  if (req.file == undefined) {
    attachments = null;
  } else {
    attachments = [
      {
        filename: req.file.filename,
        path: req.file.path, //path.join(__dirname, req.file.destination, req.file.filename),
      },
    ];
  }

  const postData = {
    from,
    to,
    subject,
    html,
    attachments,
  };

  const result = await nodemailer.send(postData);

  if (result.messageId) {
    res.json({ retCode: "OK" });
  } else {
    res.json({ retCode: "NG" });
  }

  // res.json(result);
  // res.send("<p>메일발송성공</p>");
});

app.post("/api/excel_upload", upload.single("myFile"), async (req, res) => {
  console.log(req);

  const result = await excel_run(req.file.path);
  res.json(result);
  // if (result.messageId) {
  // console.log(result.messageId);
  //   res.json({ retCode: "OK" });
  // } else {
  //   console.log(result.messageId);

  //   res.json({ retCode: "NG" });
  // }
});

app.listen(3000, () => {
  console.log("sever is running...");
});
