const boardService = require("../services/boardService");

const list = async (req, res) => {
  const [rows] = await boardService.getList();
  console.log("현재 로그인 정보: ", req.session.user.login_id);
  res.json(rows);
};

const detail = async (req, res) => {
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  res.json(rows);
};

//create()
const create = async (req, res) => {
  const { title, content, writer_id } = req.body;
  try {
    const [rows] = await boardService.getCreate({ title, content, writer_id });
    console.log(rows);
    res.json({ retCode: "OK" });
  } catch {
    res.json({ retCode: "NG" });
  }
  //res.json(rows);
};

module.exports = { list, detail, create };
