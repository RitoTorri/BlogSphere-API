// requires
const express = require('express')
const router = express.Router()
const middleware = require('../middlewares/auth.middleware')

// instancias de modelos
const AuthController = require('../controllers/auth.controller')
const controller = new AuthController()

// Routes
router.post('/login', middleware.ValidateLogin, controller.login)

module.exports = router