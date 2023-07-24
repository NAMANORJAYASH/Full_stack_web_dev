const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
const router = express.Router()
const verify_user = require('../middleware/verify_user')

router.get('',(req,res)=>{res.render('Login')})
router.post('',(req,res)=>{verify_user(req,res)})

module.exports = router