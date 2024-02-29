const express = require('express');
const router = express.Router();
const expense_controller = require('../controller/expense');
const {auth}=require("../middleware/authorization")

router.post('/create',auth, expense_controller.create);

router.get('/fetch',auth, expense_controller.get);

router.delete('/delete/:id',auth, expense_controller.remove);

router.patch('/update/:id',auth, expense_controller.update);

module.exports = router