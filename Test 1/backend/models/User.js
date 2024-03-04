const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema( {

    Name: {
        type: String,
        required: true
    },

    Nationality: {
        type: String,
        required: true
    },

    Username: {
        type: String,
        required: true
    },

    Password: {
        type: String,
        required: true
    }


})

module.exports = mongoose.model('User', UserSchema)