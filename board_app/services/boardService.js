const boardModel = require("../models/boardModel");

async function getList() {
  return boardModel.getList();
}

async function getDetail(id) {
  return boardModel.getById(id);
}

async function getCreate({ title, content, writer_id }) {
  return boardModel.getByQuery({ title, content, writer_id });
}

async function remove(board_id, user) {
  const [rows] = await boardModel.getById(board_id);
  const board = rows[0];

  if (board.writer_id != user.member_id) {
    return "NO_AUTH";
  }

  return boardModel.remove(board_id);
}
//create()

module.exports = { getList, getDetail, getCreate, remove };
