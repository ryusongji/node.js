const { boardList, userName } = require("./board");
const { logger } = require("./console_class");
logger.log(userName);
let result = boardList();

for (let board of result) {
  logger.log(`글제목 ${board.bno}, 이름은 ${board.title}`);
}
