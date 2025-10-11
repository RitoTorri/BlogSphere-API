const express = require('express')
const router = express.Router()

// middlewares
const auth = require('../../shared/middlewares/middleware.validate')
const middleware = require('./posts.middleware')

// controllers
const PostsController = require('./posts.controller')
const controller = new PostsController()

// Obtiene los posts por id de un usuario 
router.get('/posts/me', auth.ValidateTokenAccess, controller.getPostsByAuthor)

// Obtiene los comentarios de un post 
router.get('/posts/comments/:post_id', auth.ValidateTokenAccess, middleware.getCommentsByPostId, controller.getCommentsByPostId)

// Crea un post 
router.post('/posts', auth.ValidateTokenAccess, middleware.CreatePost, controller.createPost)

// Elimina un post por el id de ese post 
router.delete('/posts/:id_post', auth.ValidateTokenAccess, middleware.DeletePost, controller.deletePost)

// Actualiza un post por el id de ese post 
router.patch('/posts/:id_post', auth.ValidateTokenAccess, middleware.UpdatePost, controller.updatePost)

module.exports = router