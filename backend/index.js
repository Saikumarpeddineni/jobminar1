const express = require("express");
const app=express();
const bcrypt =require("bcrypt");
const mongoose = require("mongoose");
const User = require('./Models/User');
const cors = require('cors');
const path=require("path");

const corsOptions = {
    credentials: true,
    origin: 'https://jobminar1.vercel.app', 
    optionsSuccessStatus: 200,
  };

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'build')));

const salt = bcrypt.genSaltSync(10);
const secret = "my123Secret456";

mongoose.connect("mongodb+srv://saikumarpeddineni18:TjnhWDE8XiQ5F0d0@jobminar.sykrkd8.mongodb.net/?retryWrites=true&w=majority");

app.post("/register",async (req,res)=>{
    const {username,password}=req.body;
    console.log("Register")
    try{
        const UserDoc=await User.create({username,password:bcrypt.hashSync(password,salt)});
        res.json(UserDoc);
    }catch(e){
        res.status(400).json(e);
    }
});

app.post("/login",async (req,res)=>{
    try{
        const {username,password}=req.body;
    const userDoc = await User.findOne({username});
    const passOk= bcrypt.compareSync(password,userDoc.password);
    if(passOk){
        console.log("Login Succesful");
        res.status(200).json("Login Successful");
    }else{
        console.log("Login Unsuccesful");
        res.status(400).json('wrong credentials');
    }
    }catch(e){
        res.status(400).json('wrong credentials');
    }
});

app.listen(4001,()=>{
    console.log("Server listening");
});

//mongodb+srv://saikumarpeddineni18:TjnhWDE8XiQ5F0d0@jobminar.sykrkd8.mongodb.net/?retryWrites=true&w=majority

//password:  TjnhWDE8XiQ5F0d0