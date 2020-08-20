const express = require('express');

const user = express.Router();

user.get('/',(req,res)=>{
    res.send({
        msg:'hi 3030!'
    })
})

module.exports = user;