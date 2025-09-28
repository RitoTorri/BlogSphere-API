// requires
const bcrypt = require('bcrypt')

// instancia de modelos
const AuthModel = require('../models/auth.model')
const Authmodel = new AuthModel()

const RegisterModel = require('../models/register.model')
const registerModel = new RegisterModel()

const PostsModel = require('../models/posts.model')
const postModel = new PostsModel()

const UsersModel = require('../models/users.model')
const userModel = new UsersModel()

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
            await userModel.getUserByEmail(object)
            return await postModel.createPost(object)
        } catch (error) { throw error }
    }

    async deletePost(object) {
        try {
            // validar que el post exista
            await postModel.getPostById(object)
            return await postModel.deletePost(object)
        } catch (error) { throw error }
    }

    async updatePost(object) {
        try {
            // validar que el post exista
            await postModel.getPostById(object)
            return await postModel.updatePost(object)
        } catch (error) { throw error }
    }

    async getPostsByAuthor(object) {
        try {
            // validar que el usuario exista
            await userModel.getUserByEmail(object)
            return await postModel.getPostsByAuthor(object)

        } catch (error) { throw error }
    }

    async getCommentsByPostId(object) {
        try {
            // validar que el post exista
            await postModel.getPostById({ id_post: object.post_id })
            return await postModel.getCommentsByPostId(object)

        } catch (error) { throw error }
    }

    async getUsersSearch(object) {
        try {
            return await userModel.getUsersSearch(object)
        } catch (error) { throw error }
    }

    async createComment(object) {
        try {
            // validar que el usuario que comento el post exista
            await userModel.getUserByEmail({ author_post: object.author_comment })
            await postModel.getPostById({ id_post: object.post_id })

            return await userModel.createComment(object)
        } catch (error) { throw error }
    }

    async deleteComment(object) {
        try {
            await userModel.getCommentById(object) // validar que el comentario exista
            return await userModel.deleteComment(object)
        } catch (error) { throw error }
    }

    async editProfile(object) {
        try {
            await userModel.getUserById({ id: object.id_user })
            return await userModel.editProfile(object)
        } catch (error) { throw error }
    }
}

module.exports = User