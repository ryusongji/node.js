// costomer 와 관련된 라우팅 정보
const router = require("express").Router();
const compression = require("compression");
const path = require("path"); // 임포트

// http 요청방식 + end point => CRUD 처리 (REST 방식)
router.get(
  "/search",
  (req, res, next) => {
    console.log("middleware 요청");
    next();
  },
  (req, res) => {
    // res.redirect("/");
    // res.download(path.join(__dirname, "./EE0R8XcU0AAlbth.jpg"));
    console.log("응답처리중");
    res.send({ retCode: "Success", retMsg: "Server Status 200" });
  },
);

router.post("/add", (req, res) => {
  res.send("POST 방식 요청");
});

//GET요청(parameter로 처리)
//POST 요청(bodu에 데이터 해석) => req.body 해석
router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login page");
});

// compression() 미들웨어 적용
router.get("/download", compression(), (req, res) => {
  // res.send("compression() 모듈 적용");
  res.download(path.join(__dirname, "..", "EE0R8XcU0AAlbth.jpg"));
});

router.get("/error", (err, req) => {
  throw new Error("에러발생");
});

module.exports = router; //익스포트
