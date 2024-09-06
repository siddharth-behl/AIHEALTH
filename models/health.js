const mongoose = require('mongoose');

health_schema=new mongoose.Schema({
    asked:{
        type:Boolean,
        default:false
    },
    condition:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now()
    },
    problem:{
        type:String,
        required:true
    }
},{timeStamps:true})

health=mongoose.model('Health',health_schema);
module.exports=health