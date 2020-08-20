const express = require('express');
const user = require('./router/user');
const debug = require('debug')('my-application');

const app = express();

app.use('/api/user',user)

app.listen(3030,(req,res)=>{
    debug('server running 3030')
})