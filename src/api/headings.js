const express = require('express')  
const router = express.Router();
const headings = require('../JSON/headings.json')
router.get('/' ,(req, res , next)=>{
    res.status(200).send(headings)
})
module.exports = router;