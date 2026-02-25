module.exports = {
  customerList: `SELECT * FROM customers`,
  // customerInsert: `INSERT INTO customers (name, email, phone)
  //                 values(?,?,?)`,
  customerInsert: `INSERT INTO customers set ?`,
  customerUpdate: `UPDATE customers set ? WHERE id=?`,
  customerDelete: `DELETE FROM customers WHERE id=?`,
  customerSearch: `SELECT * FROM customers WHERE email=?`,
};
