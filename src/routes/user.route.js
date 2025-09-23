const router = require('express').Router()
const middleware = require('../middlewares/user.middleware')
const auth = require('../middlewares/auth.middleware')

const Controller = require('../controllers/user.controller')
const controller = new Controller()

router.get('/users', auth.ValidateTokenAccess, middleware.GetUsers, controller.getUsers)

router.post('/users', auth.ValidateTokenAccess, middleware.createdComment, controller.createComment)

module.exports = router