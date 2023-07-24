const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();
const router = express.Router()
const add_user = require('../middleware/add_user')


router.get('',(req,res)=>res.render('Register',{warning : ''}))
router.post('',(req,res)=>{
    add_user(req.body,res)})
    
module.exports = router