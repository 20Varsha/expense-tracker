const express = require('express');
const router = express.Router();
const income_controller = require('../controller/income');
const {auth}=require("../middleware/authorization")

router.post('/create',auth, income_controller.create);

router.get('/fetch',auth, income_controller.get);

router.delete('/delete/:id',auth, income_controller.remove);

router.patch('/update/:id',auth, income_controller.update);

module.exports = router