const express = require("express"); // 임포트
const session = require("express-session");
const cors = require("cors");
const app = express();
const customerRoute = require("./routes/customer.js");
const productRoute = require("./routes/product.js");
const fs = require("fs");
const compression = require("compression");
const fileStore = require("session-file-store")(session);

// 정적파일 폴더 html, css, js
app.use(express.static("public"));

app.use(express.urlencoded()); // x-www-form-urlencoded
app.use(express.json());
app.use("/customer/download", compression()); //모든 라우팅에 적용

// session 관리
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 60000,
    },
    // store: new fileStore(),
  }),
);

// cors 셋업
app.use(cors());

// 라우팅. 요청방식 + URL (end point) => 실행할 함수.
app.get("/", (req, res) => {
  res.status(200).send("서버실행");
});

// nodemon test.

// 외부 라우팅 정보
app.use("/customer", customerRoute);
app.use("/product", productRoute);

app.get("/data", (req, res) => {
  res.json({ id: "1001", name: "홍" });
});

// session
app.get("/login", (req, res) => {
  req.session.user = { id: "user99", name: "홍길동" };
  console.log(req.session.user);
  res.send("session에 저장");
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("로그아웃");
});

app.get("/my_info", (req, res) => {
  if (!req.session.user) {
    res.json({ retCode: "NG", retMsg: "No user info" });
    return;
  }
  res.json(req.session.user);
});

//express에서 에러처리
app.get("/error", (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMsg: err.message });
});

// 서버실행
app.listen(3000, () => {
  console.log(`서버실행... http://localhost:3000`);
});
