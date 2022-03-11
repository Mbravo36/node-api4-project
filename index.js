require('dotenv').config();

const server = require('./api/server');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`server is up on port ${PORT}, user is ${process.env.USER}!`);
});