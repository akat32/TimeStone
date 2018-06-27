const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path')
const ejs = require('ejs')
app.use(cors());

//app.use(express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res)=>{
  res.render('signup3.html')
})

app.listen(3322, ()=>{
  console.log('Server On!')
})
