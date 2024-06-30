const mongoose = require('mongoose')

let dbpath = "mongodb://0.0.0.0:27017/assignment";
console.log("path", dbpath);
mongoose.connect(dbpath)
    .then((val) => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });