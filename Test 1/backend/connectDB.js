// setting up connection
const mongoose = require('mongoose')

function connectDB(url) {

    try {

        return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })    

    } 
    
    catch (error) {

        console.error('Error connecting to MongoDB:', error);

    }

}

module.exports = connectDB