const mongoose = require('mongoose')
const Blog = require('../models/blog_model')

function add_blog(req,res){
    const blog = new Blog({
        title : req.body.Title,
        body : req.body.Body,
        Username : req.user
    })

    blog.save()
    res.redirect('home')
}

module.exports = add_blog