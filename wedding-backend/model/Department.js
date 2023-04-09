const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const departmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    price:{
        type:String,
        required:true,
    },
    pic:{
        type:String,
        required:true,
    },
    service:{
        type:String,
        required:false,
    },
    createdBy:{
        type:String
    },
    address:{
        type:String,
        required:false, 
    },
    ratiing:{
        type:Number,
        min:0,
        max:5
    },
    featured:{
        type:Boolean,
        default:false,
    },

});

mongoose.model("Department",departmentSchema);