const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  // port: 587,
  // secure: false,
  auth: {
    user: "thdwl525@g.yju.ac.kr",
    pass: "hbwwafryvfubodzy",
  },
});

const send = async (data) => {
  return new Promise((resolve, reject) => {
    transport.sendMail(data, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log(result);
      resolve(result);
    });
  });
};

// send({
//   from: "thdwl525@g.yju.ac.kr",
//   to: "saru-7@naver.com",
//   subject: "파일첨부테스트",
//   html: "<p>파일첨부연습</p>",
//   attachments: [
//     {
//       filename: "딸기.jpg", //파일명
//       path: __dirname + "/uploads/" + "딸기.jpg", //실제파일
//     },
//   ],
// });

// console.log("main send ...");
module.exports = { send };
