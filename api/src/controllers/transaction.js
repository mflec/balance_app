const { Transaction, User } = require("../db");

async function postTransaction(req, res) {
  try {
    const { concept, amount, type, id } = req.body;
    const user = await User.findOne({where: {id: id}});
    const today= new Date();
    const date = today.toLocaleDateString();
    const transaction = await Transaction.create({
      concept,
      amount,
      date,
      type
    });
    await user.setTransactions(transaction);
    return res.status(200);
  } catch (error) {
    console.log(error);
  }
}

async function transactions(req, res) {
  try {
    const { id } = req.query
    const user = await User.findByPk(id, { include: [Transaction] })
    return user ?
      res.status(200).json(user) :
      res.status(404)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  postTransaction,
  transactions
}