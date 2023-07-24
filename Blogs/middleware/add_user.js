const mongoose = require('mongoose')
const User = require('../models/user_model')
const bcrypt = require('bcrypt')

async function add_user(req_body,res) {
    var Username = req_body.Username
    try {
        var conditional = true;
        const users = await User.find({});

        for ( user of users) {
            if (user.Username == Username) {
                console.log('false')
                conditional = false
                res.render('Register',{warning : 'This username already exists!!'})
            }
        }

        if (conditional == true) {
            console.log('true')
            password = req_body.Password
            var user = new User({
                Username: Username,
                hashedPassword: await bcrypt.hash(password, 10),
                role: {'user': 1}
            })
            user.save()
            res.redirect('home')
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = add_user
