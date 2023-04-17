const mongoose = require('mongoose');

const oweSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    rowIndex: {
        type: Number,
        required: true,
    },
});

// The quotationed word is the name of the collection passed to mongo. If no collection exists, it will create a new one. 
// if a collection with that name does exist, it will append the data to that collection
module.exports = mongoose.model('OweSchema', oweSchema); 