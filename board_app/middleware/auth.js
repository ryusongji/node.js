const jwt = require("jsonwebtoken");

const authCheck = async (req, res, next) => {
  console.log("middleware...");
  if (req.session.user) {
    next();
  } else {
    return res.send({ retCode: "NG", retMsg: "권한이 없습니다" });
  }
};

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log("header=>", authHeader);

  if (!authHeader) {
    return res.json({ retCode: "NG", retMsg: "토큰값이 없dm" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, "secret-token");
    // console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    return res.json({ retCode: "NG", retMsg: "토큰 오류" });
  }
};

module.exports = { authCheck, verifyToken };
