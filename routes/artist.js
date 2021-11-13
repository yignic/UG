const express = require("express");

const router = express.Router();

router.get("/artist",(req,res)=>{
    res.render("Artist-form")
});

router.post("/artistform",(req,res)=>{
    console.log("hello world");
    res.render("Artist-form")
})




module.exports= router