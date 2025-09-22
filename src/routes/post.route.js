const express = require('express')
const router = express.Router()

// middlewares
const auth = require('../middlewares/auth.middleware')
const middleware = require('../middlewares/posts.middleware')

// controllers
const PostsController = require('../controllers/posts.controller')
const controller = new PostsController()

router.get('/posts/:id_user', auth.ValidateTokenAccess, middleware.GetPostsUser, controller.getPostsByAuthor)

router.post('/posts', auth.ValidateTokenAccess, middleware.CreatePost, controller.createPost)

router.delete('/posts/:id_post', auth.ValidateTokenAccess, middleware.DeletePost, controller.deletePost)

module.exports = router