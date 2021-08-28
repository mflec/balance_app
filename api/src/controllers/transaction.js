const { Transaction, User } = require("../db");
const jwt = require("jsonwebtoken");


async function postTransaction(req, res) {
  try {
    const { concept, amount, type, token } = req.body;
    const decoded = jwt.verify(token, "mysecretkey");
    const user = await User.findOne({ where: { id: decoded.id } });
    const today = new Date();
    const date = today.toLocaleDateString();
    const transaction = await Transaction.create({
      concept,
      amount,
      date,
      type
    });
    await user.addTransactions(transaction);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
}

async function transactions(req, res) {
  try {
    const token = req.headers['x-access-token'];
    const decoded = jwt.verify(token, "mysecretkey");

    if (token) {
      const user = await User.findByPk(decoded.id, { include: [Transaction] });
      if (user) return res.status(200).json(user);
    }
    throw new Error;
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  postTransaction,
  transactions
}