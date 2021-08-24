const { Router } = require("express");
const usersRoutes = require("./users");
const transactionRoutes = require("./transaction");

const router = Router();

router.use("/", usersRoutes);
router.use("/:id", transactionRoutes)

module.exports = router
