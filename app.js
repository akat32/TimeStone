const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path')
const ejs = require('ejs')
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/signup3', (req, res)=>{
  res.render('signup3.html')
})
.get('/signup2', (req,res)=>{
  res.render('signup2.html')
})
.get('/signup1', (req,res)=>{
  res.render('signup1.html')
})
.get('/', (req,res)=>{
  res.render('main.html')
})
.get('/login', (req,res)=>{
  res.render('login.html')
})
.get('/welcome', (req,res)=>{
  res.render('welcome.html')
})
.get('/friend', (req,res)=>{
  res.render('friend.html')
})
.get('/chat/:email', (req,res)=>{
  var email = req.params.email
  res.render('chat.html')
})
app.listen(3030, ()=>{
  console.log('Server On!')
})
