const express = require('express');
const ejs = require('ejs');
const app = express();
const router = express.Router();
const verify_access_token = require('../middleware/verify_access_token')
const Blog = require('..//models/blog_model')

router.get('',(req,res,next)=>{
    verify_access_token(req, res, next, 'home');
},
async (req,res)=>{
    let blogs = await Blog.find({})
    let blogs_10 = []
    for(blog of blogs){
        blogs_10 = [...blogs_10,blog]}
    blogs = []
    for(i=0;i<10;i++){
        if(blogs_10[i]){
        blogs = [...blogs,blogs_10[i]]
        }}
    console.log(blogs)
    res.render('user/home',{Blogs : blogs})
}
)

module.exports = router