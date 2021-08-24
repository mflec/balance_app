const { Transaction, User } = require("../db");

async function postTransaction(_req, res) {
  try {
    const { id } = req.params;
    const { concept, amount, date, type } = req.body;
    const user = await User.findByPk(id);
    const transaction = await Transaction.create({
      concept,
      amount,
      date,
      type
    });
    await user.setTransaction(transaction);
    return res.status(200);
  } catch (error) {
    console.log(error);
  }
}

async function transactions(req, res) {
  try {
    const { id } = req.params
    const user = await User.findByPk(id, { include: [Transaction] })
    return user ?
      res.json(user) :
      res.status(404)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  postTransaction,
  transactions
}