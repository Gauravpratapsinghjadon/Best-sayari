const express = require('express')
const app = express();
let port  = process.env.PORT || 3000;

app.get("/",(req, res)=>{
    res.send("Hello World")
})

app.get('/define',(req,res)=>{
    res.status(200).json({hello:"ram lal",id:'12' })
})
app.listen(port ,()=>{
    console.log("Example node js")
})