const { default: mongoose } = require('mongoose')
const User = require('../models/user_model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')

async function verify_user(req,res){
    
    Username = req.body.Username
    Password = req.body.Password
    var condition = false
    var users = await User.find({})
    require('dotenv').config()

    for(user of users){
        if(user.Username == Username){
            condition = await bcrypt.compare(Password,user.hashedPassword)
            }
        }

    if(condition){
        const access_token = jwt.sign(
            {'Username' : Username},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn : 3600}
        )

        const date = new Date();
        date.setTime(date.getTime() + (60 * 60 * 1000));
        res.cookie('access_token',access_token,{expires : date})
        res.redirect('/home')  
    }
    else{
        res.render('Register',{warning : 'Credentials are incorrect!!'})
        res.end()
        console.log('ended in negation')
    }
}

module.exports = verify_user