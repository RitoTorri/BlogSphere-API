const response = require('../utils/responses')

const UserService = require('../services/user.service')
const user = new UserService()

class UserController {
    constructor() { }

    async getUsers(req, res) {
        try {
            const { name } = req.params
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
            if (error.message === 'User not found.') return response.ItemNotFound(res, 'Not found a user with this id.')
            if (error.message === 'Post not found.') return response.ItemNotFound(res, 'Not found a post with this id.')
            if (error.message === 'Comment not created.') return response.BadRequest(res, 'The comment was not created.')
            return response.ErrorInternal(res, error.message)
        }
    }

    async deleteComment(req, res) {
        try {
            const { id_comment } = req.params
            const object = { id: id_comment }

            await user.deleteComment(object)
            response.QuerySuccess(res, "the comment deleted successfully.")
        } catch (error) {
            if (error.message === 'Comment not found.') return response.ItemNotFound(res, 'Not found a comment with this id.')
            if (error.message === 'Error deleting comment.') return response.BadRequest(res, 'Error deleting comment, make sure to submit the correct parameters.')
            return response.ErrorInternal(res, error.message)
        }
    }

    async editProfile(req, res) {
        try {
            const { id_user } = req.params
            const { email, name, lastname, biography, photo } = req.body
            const object = {}

            if (id_user) object.id = id_user
            if (email) object.email = email
            if (name) object.name = name
            if (lastname) object.lastname = lastname
            if (biography) object.biography = biography
            if (photo) object.photo = photo

            await user.editProfile(object)
            response.QuerySuccess(res, "the profile updated successfully.")

        } catch (error) {
            if (error.message === 'User not found.') return response.ItemNotFound(res, 'Not found a user with this id.')
            if (error.message === 'Error updating profile.') return response.BadRequest(res, 'Error updating profile, make sure to submit the correct parameters.')
            if (error.code === '23505') return response.ParametersInvalid(res, 'The email aleady exists.')
            return response.ErrorInternal(res, error.message)
        }
    }
}

module.exports = UserController