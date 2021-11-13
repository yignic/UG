const express = require("express")
 const router = express.Router();
 
 
 const  Band = require("../models/bandmodel");
   



 router.get("/bandform",(req,res)=>{
     res.render("Bands-form")
 })

 router.post("/bandform",(req,res)=>{
    console.log("hello world");
    res.render("Bands-form")
})

 module.exports = router