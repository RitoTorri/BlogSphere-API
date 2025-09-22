const { pool } = require('../config/db')

class PostsModel {
    constructor() { }

    async getPostsByAuthor(object) {
        try {
            const query = 'SELECT id_user AS "id_author", id AS "id_Post", title, content, date_created FROM posts WHERE id_user = $1 AND active = true ORDER BY id_user ASC'
            const params = [object.id_user]

            const result = await pool.query(query, params)
            return result.rows

        } catch (error) { throw error }
    }

    async getPostById(object) {
        try {
            const query = 'SELECT id_user AS "id_author", id AS "id_Post", title, content, date_created FROM posts WHERE id = $1 AND active = true'
            const params = [object.id_post]

            const result = await pool.query(query, params)
            return result.rows

        } catch (error) { throw error }
    }

    async createPost(object) {
        const query = 'INSERT INTO posts (id_user, title, content) VALUES ($1, $2, $3) RETURNING id_user, id, title, content, date_created'
        const params = [object.id_user, object.title, object.content]

        try {
            const result = await pool.query(query, params)

            if (result.rows.length === 0) throw new Error('Post not created.')
            return result.rows[0]

        } catch (error) { throw error }
    }

    async deletePost(object) {
        const query = 'Update posts SET active = false WHERE id = $1 AND active = true'
        const params = [object.id_post]

        try {
            const result = await pool.query(query, params)

            if (result.rowCount === 0) throw new Error('Error deleting post.')
            return result.rows[0]

        } catch (error) { throw error }
    }
}

module.exports = PostsModel 