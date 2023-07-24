const mongoose = require('mongoose')
const Schema = mongoose.Schema

user_schema = new Schema({
    Username : {required : true,
             type : String },
    hashedPassword : {required : true,
            type : String},
    role : {required : true,
            type : Object}
})

const User = mongoose.model('User',user_schema)

module.exports = User; 