// Create a variable for express which will help run the server
const express = require('express')

// Create a path variable which can find files on our server
const path = require('path')

// Use express to initialize our server application
const app = express()

// Tell node to complile .pug files to HTML
app.set('view engine', 'pug')

// Tell node where our public/static assests are (css,js,images, etc.)
app.use(express.static(path.join(__dirname, './public')))

// Set up our Routes on the website
app.get('/', function(req, res){
   // res.send('<h3 style="color: red;">Welcome to my updated website</h3>')
   res.render('index',{title:'Home'})
})
app.get('/about', function(req, res){
   res.render('about',{title:'About'})
})
app.get('/contact', function(req, res){
   res.render('contact',{title:'Contact'})
})

// Tell the server how to start
// Our server URL is localhost:3000
const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log(`Server is running on PORT ${port}`)
})