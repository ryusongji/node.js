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

//create()

module.exports = { getList, getDetail, getCreate };
