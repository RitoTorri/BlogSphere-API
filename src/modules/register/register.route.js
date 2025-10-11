// requires
const express = require('express')
const router = express.Router()
const middleware = require('./register.middleware')

// instancias de controllers
const RegisterController = require('./register.controller')
const controller = new RegisterController()

// Routes
router.post('/register', middleware.ValidateRegister, controller.register)

module.exports = router