const express = require('express')  
const router = express.Router();
const LoveSayari = require('../JSON/LoveSayari.json')
router.get('/' ,(req, res , next)=>{
    res.status(200).send(LoveSayari)
})

module.exports = router;