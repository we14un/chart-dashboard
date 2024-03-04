// router for registration
const express = require('express')
const router = express.Router()
const registrationController = require('./controllers/registration')

// req is the user data cmg in 

router.post('/registration', registrationController)


module.exports = router
