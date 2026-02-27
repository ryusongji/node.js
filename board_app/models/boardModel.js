// 게시글 관련 CRUD
const pool = require("../config/db.js");

async function getList() {
  const sql = `
    SELECT b.*, m.login_id, m.name
    FROM tbl_board b
    JOIN tbl_member m ON b.writer_id = m.member_id
    ORDER BY b.board_id DESC
  `;
  return pool.query(sql);
}

async function getById(id) {
  const sql = `
    SELECT b.*, m.login_id, m.name
    FROM tbl_board b
    JOIN tbl_member m ON b.writer_id = m.member_id
    WHERE b.board_id = ?
  `;
  console.log(sql, [id]);
  return pool.query(sql, [id]);
}

async function getByQuery({ title, content, writer_id }) {
  // const sql = `
  //   INSERT INTO tbl_member (login_id, name, password)
  //                  values(?,?,?)
  // `;
  // insert into tbl_board (title, content, writer_id)
  //                values(?,?,?)
  const sql = `
    INSERT INTO tbl_board set ?
  `;

  return pool.query(sql, [{ title, content, writer_id }]);
}

async function remove(board_id) {
  const sql = `delete from tbl_board where board_id = ?`;
  return pool.query(sql, [board_id]);
}

module.exports = { getList, getById, getByQuery, remove };
