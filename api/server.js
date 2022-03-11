const express = require('express');

const usersRouter = require('./users/users-router');

const loginRouter = require('./login/login-router');

const registerRouter = require('./register/register-router');

const server = express();

server.use(express.json());
server.get('/', (req,res)=>{
    res.end(`name: Maribel`)
});
server.use('/api/users', usersRouter);
server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);

module.exports = server;