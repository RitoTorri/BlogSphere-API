const router = require('express').Router()
const middleware = require('../middlewares/user.middleware')
const auth = require('../middlewares/auth.middleware')

const Controller = require('../controllers/user.controller')
const controller = new Controller()

// endpoint para buscar usuarios en la barra de busqueda
router.get('/users/search', auth.ValidateTokenAccess, middleware.GetUsers, controller.getUsers)

// endpoint para hacer commentarios a los post
router.post('/users/comment', auth.ValidateTokenAccess, middleware.createdComment, controller.createComment)

// endpoint para borrar un commentario
router.delete('/users/comment/:id_comment', auth.ValidateTokenAccess, middleware.deleteComment, controller.deleteComment)

module.exports = router