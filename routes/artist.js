const express = require("express");
const Artist = require("../models/artistmodel")
const router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        var images = file.fieldname;
        console.log(images);
        cb(null, file.fieldname + '-' + Date.now());
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

router.get("/artist",(req,res)=>{
    res.render("Artist-form")
});

router.post("/artistform",upload.single('icon'),(req,res)=>{
    console.log(req.body);
    const user =new Artist(req.body) 
    user.icon = req.file.path
    user.save()
    res.render("Artist-form")
})




module.exports= router