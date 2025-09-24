// requires
const bcrypt = require('bcrypt')

// instancia de modelos
const AuthModel = require('../models/auth.model')
const Authmodel = new AuthModel()

const RegisterModel = require('../models/register.model')
const registerModel = new RegisterModel()

const PostsModel = require('../models/posts.model')
const model = new PostsModel()

const UsersModel = require('../models/users.model')
const user = new UsersModel()

// Clase
class User {
    constructor() { }

    async login(object) {
        try {
            return await Authmodel.login(object)
        } catch (error) { throw error }
    }

    async register(object) {
        try {
            const password = await bcrypt.hash(object.password, 10)
            object.password = password

            return await registerModel.register(object)
        } catch (error) { throw error }
    }

    async createPost(object) {
        try {
            // validar que el usuario exista
            await user.getUser(object)

            const result = await model.createPost(object)
            return result
        } catch (error) { throw error }
    }

    async deletePost(object) {
        try {
            // validar que el post exista
            await model.getPostById(object)
            return await model.deletePost(object)

        } catch (error) { throw error }
    }

    async updatePost(object) {
        try {
            // validar que el post exista
            const post = await model.getPostById(object)
            return await model.updatePost(object)

        } catch (error) { throw error }
    }

    async getPostsByAuthor(object) {
        try {
            // validar que el usuario exista
            await user.getUser(object)

            const posts = await model.getPostsByAuthor(object)
            return posts

        } catch (error) { throw error }
    }

    async getCommentsByPostId(object) {
        try {
            // validar que el post exista
            await model.getPostById({ id_post: object.post_id })
            return await model.getCommentsByPostId(object)

        } catch (error) { throw error }
    }

    async getUsersSearch(object) {
        try {
            return await user.getUsersSearch(object)
        } catch (error) { throw error }
    }

    async createComment(object) {
        try {
            await user.getUser({ author_post: object.author_comment })
            await model.getPostById({ id_post: object.post_id })

            return await user.createComment(object)
        } catch (error) { throw error }
    }

    async deleteComment(object) {
        try {
            await user.getCommentById(object)
            return await user.deleteComment(object)

        } catch (error) { throw error }
    }
}

module.exports = User