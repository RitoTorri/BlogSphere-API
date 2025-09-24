const { pool } = require('../config/db')

class UsersModel {
    constructor() { }

    async getUser(object) {
        try {
            const query = "SELECT * FROM users WHERE email = $1 AND active = true"
            const params = [object.author_post]

            const result = await pool.query(query, params)
            if (result.rows.length === 0) throw new Error('User not found.')

            return result.rows[0]
        } catch (error) { throw error }
    }

    async getUsersSearch(object) {
        try {
            const query = `SELECT name || ' ' || lastname AS Nombre_y_apellido, email, photo, biography FROM users WHERE name || ' ' || lastname LIKE $1 AND active = true ORDER BY name ASC LIMIT 10`
            const params = [`%${object.name}%`]

            const result = await pool.query(query, params)
            return result.rows
        } catch (error) { throw error }
    }

    async getCommentById(object) {
        try {
            const query = 'SELECT * FROM comments WHERE id = $1 AND active = true'
            const params = [object.id]

            const result = await pool.query(query, params)
            if (result.rows.length === 0) throw new Error('Comment not found.')

            return result.rows[0]
        } catch (error) { throw error }
    }

    async createComment(object) {
        const query = 'INSERT INTO comments (author_comment, post_id, content) VALUES ($1, $2, $3) RETURNING id, author_comment, post_id, content, date_created'
        const params = [object.author_comment, object.post_id, object.content]

        try {
            const result = await pool.query(query, params)

            if (result.rows.length === 0) throw new Error('Comment not created.')
            return result.rows[0]

        } catch (error) { throw error }
    }

    async deleteComment(object) {
        try {
            const query = 'UPDATE comments SET active = false WHERE id = $1'
            const params = [object.id]

            const result = await pool.query(query, params)
            if (result.rowCount === 0) throw new Error('Error deleting comment.')

            return result.rows[0]

        } catch (error) { throw error }
    }
}
module.exports = UsersModel