const express = require('express');
const router = express.Router()
const expense = require('../route/expense')
const health_route=require('../route/health')
const auth_user_route=require('../route/auth_user')

router.use('/expense', expense)
router.use('/backend/health_check', health_route)
router.use('/auth_user', auth_user_route)

module.exports=router

