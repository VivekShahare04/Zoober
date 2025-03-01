const express = require('express');
const app = require('./app.js'); 
const http = require('http');

const port = process.env.PORT || 8001;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});