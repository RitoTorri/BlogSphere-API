const { pool } = require('../config/db')

const modelPosts = require("./posts.model")
const Post = new modelPosts()

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

    async getUserById(object) {
        try {
            const query = 'SELECT * FROM users WHERE id = $1 AND active = true'
            const params = [object.id]

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

    async editProfile(object) {
        try {
            let query = 'UPDATE users SET '
            let count = 0
            let params = []
            let updates = [] // Array para almacenar las partes a actualizar

            if (object.email) {
                count++
                updates.push(`email = $${count}`)
                params.push(object.email)
            }

            if (object.name) {
                count++
                updates.push(`name = $${count}`)
                params.push(object.name)
            }

            if (object.lastname) {
                count++
                updates.push(`lastname = $${count}`)
                params.push(object.lastname)
            }

            if (object.biography) {
                count++
                updates.push(`biography = $${count}`)
                params.push(object.biography)
            }

            if (object.photo) {
                count++
                updates.push(`photo = $${count}`)
                params.push(object.photo)
            }

            query += updates.join(', ')
            count++
            query += ` WHERE id = $${count} AND active = true RETURNING id, email, name, lastname, biography, photo`
            params.push(object.id)

            const result = await pool.query(query, params)
            if (result.rowCount === 0) throw new Error('Error updating profile.')
            return result.rows[0]
        } catch (error) {
            throw error
        }
    }
}
module.exports = UsersModel