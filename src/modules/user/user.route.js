const router = require('express').Router()
const middleware = require('./user.middleware')
const auth = require('../../shared/middlewares/middleware.validate')

const Controller = require('./user.controller')
const controller = new Controller()

// endpoint para buscar usuarios en la barra de busqueda 
router.get('/users/search/:name', auth.ValidateTokenAccess, middleware.GetUsers, controller.getUsers)

// endpoint para hacer commentarios a los post 
router.post('/users/comment/:post_id', auth.ValidateTokenAccess, middleware.createdComment, controller.createComment)

// endpoint para borrar un commentario 
router.delete('/users/comment/:id_comment', auth.ValidateTokenAccess, middleware.deleteComment, controller.deleteComment)

// endpoint para editar el perfil de un usuario 
router.patch('/users/edit/profile', auth.ValidateTokenAccess, middleware.editProfile, controller.editProfile)

module.exports = router