const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const db= require('./db');
const Person= require('./models/Person');
const MenuItem= require('./models/MenuItem');
require('dotenv').config();
const PORT= process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Welcome to our hotel')
})




  const personRoutes= require('./routes/PersonRoutes');
  app.use('/person',personRoutes);
  const menuRoutes= require('./routes/MenuRoutes');
  app.use('/menu',menuRoutes);
  
app.listen(PORT,()=>{
  console.log("listening on port",PORT);
})