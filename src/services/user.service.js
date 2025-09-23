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
            const post = await model.getPostById(object)
            if (post.length === 0) throw new Error('Post not found.')

            return await model.deletePost(object)
        } catch (error) { throw error }
    }

    async updatePost(object) {
        try {
            // validar que el post exista
            const post = await model.getPostById(object)
            if (post.length === 0) throw new Error('Post not found.')

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

    async getUsersSearch(object) {
        try {
            const users = await user.getUsersSearch(object)
            return users
        } catch (error) { throw error }
    }

    async createComment(object) {
        try {
            const postExist = await model.getPostById({ id_post: object.post_id })
            if (postExist.length === 0) throw new Error('Post not found.')

            const result = await user.createComment(object)
            return result
        } catch (error) { throw error }
    }
}

module.exports = User