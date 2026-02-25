const cron = require("node-cron");
const { logger } = require("./winston");
const nodemailer = require("./nodemailer");
const { text } = require("express");
// 주기적으로 실행

cron.schedule("*/10 * * * * *", () => {
  // console.log(Date.now());
  nodemailer.send({
    from: "thdwl525@g.yju.ac.kr",
    to: "ppl1302@daum.net",
    subject: "행운의 편지",
    text: "오늘 공부 안하면 내일은 더 힘들거야 그니까 공부해 그냥 해 잠을 줄여서라도해",
  });
  logger.info("메일 발송");
});
