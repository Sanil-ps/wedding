const express = require('express')
const app = express();
const port = 5000;
const mongoose = require('mongoose')
// const cors = require('cors')
var bodyParser = require('body-parser')
require('./model/user');
require('./model/service')
require('./model/Department')
//middlewares
// app.use(cors())
app.use(bodyParser.json());
app.use(require('./route/auth'))
app.use(require('./route/service'))
app.use(require('./route/department'))

app.use((err,req,res) => {
    const errorMessage = err.message || "Error Found!";
    const errorStatus = err.status || 404;
    return res.status(errorStatus).json({
        success: false,
        stack: err.satck,
        status: errorStatus,
        message: errorMessage,
    })
})

mongoose.connect("mongodb+srv://compreg-user:c4CqOKha3Q30jIqy@cluster0.6ebwt.mongodb.net/wedding?authSource=admin", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected db');

})
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log('sever is running on ', port);

})