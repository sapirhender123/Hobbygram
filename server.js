const express = require('express');
const mongoose = require('mongoose');
const {urlencoded} = require("express");

const app = express();
app.use(urlencoded({extended: true}));

const dbURI = "mongodb+srv://Aviv:Aviv@cluster1.ixonf.mongodb.net/?retryWrites=true&w=majority"

const port = 5555;

mongoose.connect(dbURI).then((result) => {
    app.listen(port, () => {
        console.log('server is running on port ' + port)
    })
}).catch((err) => {
    console.log(err);
});
