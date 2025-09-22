// requires
const response = require('../utils/responses')
const Post = require('../services/posts.service')

// instancias de modelos
const post = new Post()

// clase controller
class PostsController {
    constructor() { }

    async getPosts(req, res) {
        try {
            const { id } = req.params
            const object = { id: id }

            const posts = await post.getPosts(object)
            return response.QuerySuccess(res, posts)

        } catch (error) {
            if (error.message === 'User not found.') return response.ItemNotFound(res, 'Not found a user with this id.')
            return response.ErrorInternal(res, error.message)
        }
    }
}

module.exports = PostsController