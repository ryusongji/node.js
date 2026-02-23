const express = require("express"); // 임포트
const app = express();
const customerRoute = require("./routes/customer.js");
const productRoute = require("./routes/product.js");
const fs = require("fs");

// 정적파일 폴더 html, css, js
app.use(express.static("public"));
app.use(express.urlencoded()); // x-www-form-urlencoded
app.use(express.json());

// 라우팅. 요청방식 + URL (end point) => 실행할 함수.
app.get("/", (req, res) => {
  res.status(200).send("서버실행");
});

//express에서 에러처리
app.get("/error", (err, req) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMsg: err.message });
});
// nodemon test.

// 외부 라우팅 정보
app.use("/customer", customerRoute);
app.use("/product", productRoute);

// 서버실행
app.listen(3000, () => {
  console.log(`서버실행... http://localhost:3000`);
});
