const jwt = require('jsonwebtoken')
require('dotenv').config()
const Blog = require('../models/blog_model')

const verify_access_token =async function(req,res,next,regular_version_of_url){
    //console.log(req.headers)
    //console.log(req.cookies.access_token)
    if(req.cookies.access_token){
        //console.log('if block entered')
        const access_token = req.cookies.access_token
        //console.log(access_token)
        jwt.verify(access_token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                console.log(err);
                res.write('Unauthorised : Access Denied')
                res.end()
                return err}
            else if(decoded){
                req.user = decoded.Username
                next()
                }
                })
            }
        else{

            if(regular_version_of_url=='home'){
                console.log('else block')
                let blogs = await Blog.find({})
                console.log(blogs)
                let blogs_10 = []
                for(blog of blogs){
                    blogs_10 = [...blogs_10,blog]}
                blogs = []
                for(i=0;i<10;i++){
                    if(blogs_10[i]){
                    blogs = [...blogs,blogs_10[i]]
                    }}
                console.log(blogs)
                res.render('home',{Blogs : blogs})
                res.end()}
            else if(regular_version_of_url == 'single-blog'){
                blog = await Blog.find({_id : req.params.id})
                blog = [...blog]
                console.log(blog)
                res.render('single_blog',{Blog : blog})
            }

            else{
                res.render(regular_version_of_url)
            }
        }
    }


module.exports = verify_access_token