const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/",(error)=>{
    if(!error){
        console.log('Success');
    }
    else{  
        console.log("Error connecting to database");
    }
})

const Course = require("./course.model.js");