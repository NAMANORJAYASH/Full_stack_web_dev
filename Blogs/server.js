const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine','ejs')
dbUrl = 'mongodb+srv://testuser1:Password@cluster0.md4gc7n.mongodb.net/'
mongoose.connect(dbUrl)
//listening server
app.listen(3001, 'localhost', () => {
  console.log('Server running at http://localhost:3001/');

});

//request handeling
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())
app.use((req, res, next) => {
  console.log(req.url,req.body)
  next();
});

//static
app.use(express.static('static'))
app.use('/blog',express.static('static'))

//Routing
app.use('/Create_blog',require('./routes/create_blog_route'))
app.use('/Register',require('./routes/Register_routes.js'))
app.use('/Login',require('./routes/Login_routes.js'))
app.use('/Logout',(req,res)=>{res.redirect('/home')})


//Protected Routes
app.use('/blog',require('./routes/blog_route.js'))
app.use('/',require('./routes/home_route.js'))
app.use('/home',require('./routes/home_route.js'))

