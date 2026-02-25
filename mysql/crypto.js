const crypto = require("crypto");

require("dotenv").config();

function createPassword(plainTxt) {
  const salt = process.env.MYSQL_SALT;
  const passwd = crypto.pbkdf2Sync(plainTxt, salt, 100000, 64, "sha512");
  console.log(passwd.toString("base64"));
  return passwd.toString("base64");
}

function checkPassword(plainTxt, hashPasswd) {
  const hashPasswd1 = createPassword(plainTxt);
  return hashPasswd1 == hashPasswd;
}

// const dbPass = `ZnUiDRZQxYTd3dCTdbYQwnBsQ1yC8eM4S8xCLJEkd+Vk9lw21TPnAz/C//ifdbI/qncc2fgNm2y3K4u9LBSLiQ==`;
// // console.log(dbPass);
// console.log(checkPassword("test1234", dbPass));
// createPassword("test1234");

module.exports = { createPassword, checkPassword };
