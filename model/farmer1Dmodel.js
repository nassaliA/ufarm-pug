const mongoose = require("mongoose");

const farmer1Dschema= new mongoose.Schema({
    fullname:{
        type:String,
        trim:true
    },
    phone:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    language:{
        type:String,
        trim:true
    },
    city:{
        type:String,
        trim:true
    },
    age:{
        type:Number,
        trim:true
    },

})

module.exports = mongoose.model("farmer1Dmodel", farmer1Dschema)