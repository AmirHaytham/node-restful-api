// Names of packages -which inside require('')- not up to u and has to be installed
// This file will handling the request a bit easier for us
// express => a package which intalled in=> npm install --save express

const express = require('express');
const app = express();

app.use( (req, res, nxt) => {
    res.status(200).json({
        message: 'It worx!'
    });

});

module.exports = app;
