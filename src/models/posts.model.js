const { pool } = require('../config/db')

class PostsModel {
    constructor() { }

    async getPosts(object) {
        try {
            const query = await pool.query('SELECT * FROM posts WHERE id = $1 AND active = true')
            const params = [object.id]

            const result = await pool.query(query, params)
            return result.rows

        } catch (error) { throw error }
    }
}

module.exports = PostsModel 