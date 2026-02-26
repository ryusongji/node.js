const authService = require("../services/authService");

const signup = async (req, res) => {
  const { loginId, name, password, role } = req.body;
  await authService.signup(loginId, name, password, role);

  res.json({ retCode: "OK" });
};

const login = async (req, res) => {
  const { loginId, password } = req.body;
  const user = await authService.login(loginId, password);

  if (user) {
    const { member_id, login_id, name } = user;
    req.session.user = { member_id, login_id, name };
    res.json({ retCode: "OK" });
  } else {
    res.json({ retCode: "NG" });
  }
};

module.exports = { signup, login };
