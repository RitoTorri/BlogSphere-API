const PostsModel = require('../models/posts.model')
const UsersModel = require('../models/users.model')

// instancia de modelo
const model = new PostsModel()
const user = new UsersModel()

class Post {
    constructor() { }

    async getPosts(object) {
        try {
            // validar que el usuario exista
            await user.getUser(object)

            const posts = await model.getPosts(object)
            return posts

        } catch (error) { throw error }
    }
}

module.exports = Post 