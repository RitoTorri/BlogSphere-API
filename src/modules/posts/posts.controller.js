// requires
const response = require('../../shared/utils/responses')

const User = require('./posts.service')
const user = new User()


// clase controller
class PostsController {
    constructor() { }

    async getPostsByAuthor(req, res) {
        try {
            const user_req = req.user
            const object = { author_post: user_req.email }

            const posts = await user.getPostsByAuthor(object)
            return response.QuerySuccess(res, posts)

        } catch (error) {
            if (error.message === 'User not found.') return response.ItemNotFound(res, 'Not found a user with this id.')
            return response.ErrorInternal(res, error.message)
        }
    }

    async createPost(req, res) {
        try {
            const { title, content, photo } = req.body
            const object = { author_post: req.user.email, title: title, content: content, photo: photo }

            const result = await user.createPost(object)
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
            const object = { id_post: id_post, author_post: req.user.email }

            await user.deletePost(object)
            return response.QuerySuccess(res, "The post was deleted successfully.")

        } catch (error) {
            if (error.message === 'Post not found.') return response.ItemNotFound(res, 'Not found a post with this id.')
            if (error.message === 'Error deleting post.') return response.BadRequest(res, 'ERROR deleting post, be sure to send the correct parameters. Also, make sure you are the author of this post.')
            return response.ErrorInternal(res, error.message)
        }
    }

    async updatePost(req, res) {
        try {
            const { id_post } = req.params
            const { title, content } = req.body

            const object = { id_post: id_post, title: title, content: content, author_post: req.user.email }
            await user.updatePost(object)
            return response.QuerySuccess(res, "The post was updated successfully.")

        } catch (error) {
            if (error.message === 'Post not found.') return response.ItemNotFound(res, 'Not found a post with this id.')
            if (error.message === 'Error updating post.') return response.ResConflict(res, 'Error updating post, You are not the author of this post.')
            return response.ErrorInternal(res, error.message)
        }
    }

    async getCommentsByPostId(req, res) {
        try {
            const { post_id } = req.params
            const object = { post_id: post_id }

            const comments = await user.getCommentsByPostId(object)
            return response.QuerySuccess(res, comments)

        } catch (error) {
            if (error.message === 'Post not found.') return response.ItemNotFound(res, 'Not found a post with this id.')
            return response.ErrorInternal(res, error.message)
        }
    }
}

module.exports = PostsController