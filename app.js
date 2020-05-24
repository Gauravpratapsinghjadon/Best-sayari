const express =require('express');
const app = express();
const path = require('./src/api/headings')
app.get('/',(req,res)=>{
    res.status(200).json({
        hello:'hello put Api'
    })
})

app.use("/headings",path)
app.use((req,res,next)=>{
    const error =new Error('Not Found')
    error.status(404);
    next(error)
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error:{
            message:error.message
        }
    })
})
module.exports = app;