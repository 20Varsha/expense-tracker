const express = require('express');
const router = express.Router();
const category_controller = require('../controller/category');
const {auth}=require("../middleware/authorization")

router.post('/create',auth, category_controller.create);

router.get('/fetch',auth, category_controller.get);

router.delete('/delete/:id', auth,category_controller.remove);

router.patch('/update/:id',auth, category_controller.update);

module.exports = router