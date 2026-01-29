const express = require('express')
const app = express()
const port = 3000
require('./db'); 
const userModel = require('./usermodel');

app.get('/',(req,res)=>{
  res.send('hello world')
})
//create
app.get('/create', async (req,res)=>{
   let CreatedUser = await userModel.create({
    Name : "alishba",
    username : "alishba123",
    email : "alishbashabbir890@gmail.com"
   })
  res.send(CreatedUser);
})
//show all
app.get('/read', async (req,res)=>{
  let users = await userModel.find();
  res.send(users);
})
//update
app.get('/update', async (req,res)=>{
  let update = await userModel.findOneAndUpdate(
      { username: "alishba123" },  // filter by existing username
      { Name: "alishbashabbir" },  // new Name
      { new: true } )
  res.send(update);
})

app.listen(3000);