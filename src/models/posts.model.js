const { pool } = require('../config/db')

class PostsModel {
    constructor() { }

    async getPostsByAuthor(object) {
        try {
            const query = 'SELECT author_post, id AS "id_Post", title, content, date_created FROM posts WHERE author_post = $1 AND active = true ORDER BY id ASC'

            const result = await pool.query(query, [object.author_post])
            return result.rows
        } catch (error) { throw error }
    }

    async getPostById(object) {
        try {
            const query = 'SELECT author_post, id AS "id_Post", title, content, date_created FROM posts WHERE id = $1 AND active = true'
            const params = [object.id_post]

            const result = await pool.query(query, params)
            if (result.rows.length === 0) throw new Error('Post not found.')

            return result.rows

        } catch (error) { throw error }
    }

    async createPost(object) {
        const query = 'INSERT INTO posts (author_post, title, content) VALUES ($1, $2, $3) RETURNING author_post, id, title, content, date_created'
        const params = [object.author_post, object.title, object.content]

        try {
            const result = await pool.query(query, params)

            if (result.rows.length === 0) throw new Error('Post not created.')
            return result.rows[0]

        } catch (error) { throw error }
    }

    async deletePost(object) {
        const query = 'Update posts SET active = false WHERE id = $1 AND active = true'
        try {
            const result = await pool.query(query, [object.id_post])

            if (result.rowCount === 0) throw new Error('Error deleting post.')
            return result.rows[0]
        } catch (error) { throw error }
    }

    async updatePost(object) {
        const query = 'Update posts SET title = $1, content = $2 WHERE id = $3 AND active = true RETURNING id, title, content'
        const params = [object.title, object.content, object.id_post]

        try {
            const result = await pool.query(query, params)

            if (result.rowCount === 0) throw new Error('Error updating post.')
            return result.rows[0]
        } catch (error) { throw error }
    }

    async getCommentsByPostId(object) {
        try {
            const query = 'SELECT id, author_comment, content, date_created FROM comments WHERE post_id = $1 AND active = true ORDER BY id ASC'
            const params = [object.post_id]

            const result = await pool.query(query, params)
            return result.rows

        } catch (error) { throw error }
    }
}

module.exports = PostsModel 