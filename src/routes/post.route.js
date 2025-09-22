const express = require('express')
const router = express.Router()

// middlewares
const auth = require('../middlewares/auth.middleware')
const middleware = require('../middlewares/posts.middleware')

// controllers
const PostsController = require('../controllers/posts.controller')
const controller = new PostsController()

router.get('/posts/:id_user', auth.ValidateTokenAccess, middleware.GetPostsUser, controller.getPosts)

module.exports = router