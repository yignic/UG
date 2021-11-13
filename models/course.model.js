const mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : "type name" 
    }

})

mongoose.model("Course", CourseSchema)
