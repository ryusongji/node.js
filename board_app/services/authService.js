const bcrypt = require("bcrypt");
const authModel = require("../models/memberModel");
const { trim } = require("lodash");

async function signup(loginId, name, password, role) {
  const hashed = await bcrypt.hash(password, 10);
  console.log(hashed);
  return authModel.createMember(loginId, name, hashed, role);
}

async function login(loginId, password) {
  const [rows] = await authModel.findMemberById(loginId);

  if (rows.length == 0) {
    return null;
  }
  const user = rows[0];
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return null;
  }
  return user; //token 만들어서 넣을때 필요
}

module.exports = { signup, login };
