const { pool } = require('../config/db')

class PostsModel {
    constructor() { }

    async getPosts(object) {
        try {
            const query = 'SELECT id_user AS "id_author", id AS "id_Post", title, content, date_created FROM posts WHERE id_user = $1 AND active = true ORDER BY id_user ASC'
            const params = [object.id_user]

            const result = await pool.query(query, params)
            return result.rows

        } catch (error) { throw error }
    }
}

module.exports = PostsModel 