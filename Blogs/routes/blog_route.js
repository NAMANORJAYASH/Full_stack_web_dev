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
    let blogs = await Blog.find({Username : req.user})
    let blogs_10 = []
    for(blog of blogs){
        blogs_10 = [...blogs_10,blog]}
    blogs = []
    for(i=0;i<10;i++){
        if(blogs_10[i]){
        blogs = [...blogs,blogs_10[i]]
        }}
    console.log(blogs)
    res.render('user/blogs',{Blogs : blogs})
    }
)

router.get('/:id',(req,res,next)=>{
    verify_access_token(req, res, next, 'single-blog');
},
async(req,res)=>{
    //console.log('restricted_area')
    blog = await Blog.find({_id : req.params.id})
    blog = [...blog]
    console.log(blog)
    if(req.user == blog[0].Username){
        res.render('user/single_blog_with_delete',{Blog : blog})
    }
    else{
        res.render('user/single_blog',{Blog : blog})}
})

router.get('/delete/:id',(req,res,next)=>{
    verify_access_token(req, res, next, 'home');
},
async(req,res)=>{
    console.log('restricted_area')
    console.log(req.params.id)  
    await Blog.findByIdAndDelete(req.params.id)  
    res.redirect('/home')}
)


module.exports = router
