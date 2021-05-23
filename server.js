const express = require('express');

const server = express();

server.all('/', (req, res) => {
    res.send('<h1>The bot is on<h1/>');
});

module.exports = () => {
    server.listen(3000, () => {
        console.log('Server ready.');
    });

    return true;
};