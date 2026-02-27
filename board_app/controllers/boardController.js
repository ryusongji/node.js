const boardService = require("../services/boardService");

const list = async (req, res) => {
  const [rows] = await boardService.getList();
  // console.log("현재 로그인 정보: ", req.session.user.login_id);
  res.json(rows);
};

const detail = async (req, res) => {
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  const { member_id, login_id, name } = req.session.user || {
    login_id: "",
    name: "",
    member_id: "",
  };
  res.json({ user: { member_id, login_id, name }, data: rows });
};

//create()
const create = async (req, res) => {
  const { title, content } = req.body;
  const writer_id = req.user.member_id;
  try {
    const [rows] = await boardService.getCreate({ title, content, writer_id });
    console.log(rows);
    res.json({ retCode: "OK" });
  } catch {
    res.json({ retCode: "NG" });
  }
  //res.json(rows);
};

const remove = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = boardService.remove(id, req.user);
  if (result == "NO_AUTH") {
    return res.json({ retCode: "NG", retMsg: "권한 없음" });
  }
  res.json({ retCode: "OK" });
};
module.exports = { list, detail, create, remove };
