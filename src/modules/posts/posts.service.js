const PostsModel = require('./posts.model')
const postModel = new PostsModel()
const UserModel = require('../user/user.model')
const userModel = new UserModel()


class PostsService {
    constructor() { }

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
}

module.exports = PostsService