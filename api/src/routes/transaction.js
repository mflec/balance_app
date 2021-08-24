const router = require('express').Router();
const { postTransaction, transactions } = require('../controllers/transaction');

router.post('/', postTransaction);
router.get('/', transactions);

module.exports = router;