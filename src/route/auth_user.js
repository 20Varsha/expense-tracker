const express = require('express');
const router = express.Router();
const auth_controller=require("../controller/auth_user")

router.post('/register', auth_controller.create);
router.post('/login', auth_controller.login);

module.exports = router
