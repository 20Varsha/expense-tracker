const express = require('express');
const router = express.Router();
const expense_controller = require('../controller/expense');
const {verifyToken}=require("../middleware/authorization")

router.post('/create', expense_controller.create);

router.get('/fetch',verifyToken, expense_controller.get);

router.delete('/delete/:id', expense_controller.remove);

router.patch('/update/:id', expense_controller.update);

module.exports = router