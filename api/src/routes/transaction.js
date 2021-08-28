const router = require('express').Router();
const { postTransaction, transactions } = require('../controllers/transaction');

router.post('/post', postTransaction);
router.get('/get', transactions);

module.exports = router;