const express = require('express');
const router = express.Router()
const expense = require('../route/expense')
const health=require('../route/health')
const auth_user=require('../route/auth_user')
const category=require('../route/category')
const income=require('../route/income')

router.use('/backend/health_check', health)
router.use('/auth_user', auth_user)
router.use('/category', category)
router.use('/income', income)
router.use('/expense', expense)

module.exports=router

