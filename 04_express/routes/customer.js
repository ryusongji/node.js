// costomer 와 관련된 라우팅 정보
const router = require("express").Router();
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
router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login page");
});

router.get("/error", (err, req) => {
  throw new Error("에러발생");
});

module.exports = router; //익스포트
