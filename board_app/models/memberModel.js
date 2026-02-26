// 게시글 관련 CRUD
const pool = require("../config/db.js");

async function createMember(loginId, name, password, role) {
  const sql = `
    INSERT INTO tbl_member (login_id, name, password, role)
                   values(?,?,?,?)
  `;
  return pool.query(sql, [loginId, name, password, role]);
}

async function findMemberById(loginId) {
  const sql = `select * from tbl_member where login_id = ?`;
  return pool.query(sql, [loginId]);
}
module.exports = { createMember, findMemberById };
