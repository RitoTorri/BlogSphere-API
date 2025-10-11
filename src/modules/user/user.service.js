const UserModel = require('./user.model')
const userModel = new UserModel()

const PostModel = require('../posts/posts.model')
const postModel = new PostModel()

class UserService {
    constructor() { }

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

module.exports = UserService