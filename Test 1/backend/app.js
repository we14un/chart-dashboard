// setting up env
const express = require('express')
const app = express()

require('dotenv').config()

// main page when enter
app.get('/', (req, res) => {
    res.render('Login')
})

// registration router 
const registrationRoute = require('./registrationRoute')
app.use('/registration', registrationRoute) 

// connection to mongoDB 

const connection = require('./connectDB')

async function start() {
    try {

        await connection(process.env.MONGO_URI)
        .then (() => {
            app.listen(process.env.PORT, () => console.log('Server listening on port 3001!'))
            
        })
        

    }
    catch (error) {
        console.log(error)
    }
}

start()