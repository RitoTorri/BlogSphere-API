const PostsModel = require('../models/posts.model')
const UsersModel = require('../models/users.model')

// instancia de modelo
const model = new PostsModel()
const user = new UsersModel()

class Post {
    constructor() { }

    async getPostsByAuthor(object) {
        try {
            // validar que el usuario exista
            await user.getUser(object)

            const posts = await model.getPostsByAuthor(object)
            return posts

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
}

module.exports = Post 