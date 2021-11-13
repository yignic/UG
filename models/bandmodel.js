const { text } = require("body-parser");
const mongoose = require("mongoose");

const bandSchema = new mongoose.Schema({
    bandname:{
        type: String,
        required : true,
    },
    owner:{
        type: String,
        required : true,
    },
    bandhome:{
        type: String,
        required : true,
    },
    slogan:{
        type: String,
        required : true,
    },
    icon:{
        type: String,
        required : true,
    },
    sponsors:{
        type: String,
        required : true,
    },
    dateofformation:{
        type: Date,
        required : true,
    },
    crowns:{
        type: String,
        required : true,
    },
    number:{
        type: String,
        required : true,
    },
    category:{
        type: String,
        required : true,
    }
})
    const BandModel = mongoose.model('bands', bandSchema);

    module.exports =  BandModel;
    