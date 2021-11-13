const { text } = require("body-parser");
const mongoose = require("mongoose");
   
const ArtistSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    stagename: {
        type: String,
        required: true,
    },
    dateofbirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: true,
    },
    base: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    numberofalbums: {
        type: Number,
        required: true,
    },
    nin: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    datestartedsinging :{
        type: Date,
        required: true,
    }
})
