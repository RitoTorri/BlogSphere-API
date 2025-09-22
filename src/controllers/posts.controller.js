// requires
const response = require('../utils/responses')
const Post = require('../services/posts.service')

// instancias de modelos
const post = new Post()

// clase controller
class PostsController {
    constructor() { }

    async getPostsByAuthor(req, res) {
        try {
            const { id_user } = req.params
            const object = { id_user: id_user }

            const posts = await post.getPostsByAuthor(object)
            return response.QuerySuccess(res, posts)

        } catch (error) {
            if (error.message === 'User not found.') return response.ItemNotFound(res, 'Not found a user with this id.')
            return response.ErrorInternal(res, error.message)
        }
    }

    async createPost(req, res) {
        try {
            const { id_user, title, content } = req.body
            const object = { id_user: id_user, title: title, content: content }

            const result = await post.createPost(object)
            return response.ItemCreated(res, result)

        } catch (error) {
            if (error.message === 'User not found.') return response.ItemNotFound(res, 'Not found a user with this id.')
            if (error.message === 'Post not created.') return response.BadRequest(res, 'The post was not created.')
            return response.ErrorInternal(res, error.message)
        }
    }

    async deletePost(req, res) {
        try {
            const { id_post } = req.params
            const object = { id_post: id_post }

            await post.deletePost(object)
            return response.QuerySuccess(res, "The post was deleted successfully.")

        } catch (error) {
            if (error.message === 'Post not found.') {
                return response.ItemNotFound(res, 'Not found a post with this id.')
            }

            if (error.message === 'Error deleting post.') {
                return response.BadRequest(res, 'Error deleting post, make sure to submit the correct parameters.')
            }

            return response.ErrorInternal(res, error.message)
        }
    }
}

module.exports = PostsController