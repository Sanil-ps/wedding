const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
mongoose.model('Service', serviceSchema)