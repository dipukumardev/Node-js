const { default: mongoose } = require("mongoose");
const mongoosh = require("mongoose");

// Schema
const schema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,

    },
    email: {
        type: String,

        unique: true
    },
    Jobtitle: {
        type: String,

    },
    Gender: {
        type: String,

    }
}, { timestamps: true });

// creata a model
const User = mongoose.model('User', schema);

module.exports = User;
