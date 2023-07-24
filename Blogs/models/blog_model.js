const mongoose = require('mongoose')
const Schema = mongoose.Schema

blog_schema = new Schema({
    title : {required : true,
             type : String },
    body : {required : true,
            type : String},
    Username : {required : true,
            type : String}
})

const Blog = mongoose.model('Blog',blog_schema)

module.exports = Blog; 