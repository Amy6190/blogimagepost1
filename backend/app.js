const express = require('express');
const app = express();
const cors = require('cors');
const blogroute = require('./routes/blogroute')
const mongoose = require('./config/db');

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.get('/',(req,res)=>{
    res.send("Welcome to node ")
})

app.use('/api/blogs',blogroute)

app.listen(5000,()=>{
    console.log("server running...");
})