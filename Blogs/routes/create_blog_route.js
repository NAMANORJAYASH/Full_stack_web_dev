const express = require('express');
const ejs = require('ejs');
const app = express();
const router = express.Router();
const verify_access_token = require('../middleware/verify_access_token')
const add_blog = require('../middleware/add_blog')

router.get('',(req,res,next)=>{
    verify_access_token(req, res, next, 'home');
},
(req,res)=>{
    res.render('user/create_blog')
}
)
router.post('',(req,res,next)=>{
    verify_access_token(req, res, next, 'home');
},
(req,res)=>{
    add_blog(req,res)
}
)


module.exports = router