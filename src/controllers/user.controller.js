const response = require('../utils/responses')

const UserService = require('../services/user.service')
const user = new UserService()

class UserController {
    constructor() { }

    async getUsers(req, res) {
        try {
            const { name } = req.body
            const object = { name: name }

            const users = await user.getUsersSearch(object)
            return response.QuerySuccess(res, users)

        } catch (error) {
            if (error.message === 'User not found.') return response.ItemNotFound(res, 'Not found a user with this id.')
            return response.ErrorInternal(res, error.message)
        }
    }

    async createComment(req, res) {
        try {
            const { post_id, author_comment, content } = req.body
            const object = { post_id: post_id, author_comment: author_comment, content: content }

            const result = await user.createComment(object)
            return response.ItemCreated(res, result)

        } catch (error) {
            if (error.message === 'Post not found.') return response.ItemNotFound(res, 'Not found a post with this id.')
            if (error.message === 'Comment not created.') return response.BadRequest(res, 'The comment was not created.')
            return response.ErrorInternal(res, error.message)
        }
    }
}

module.exports = UserController