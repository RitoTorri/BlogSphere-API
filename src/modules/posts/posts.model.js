const { pool } = require('../../config/db')

class PostsModel {
    constructor() { }

    async getPostsByAuthor(object) {
        try {
            const query = 'SELECT author_post, id AS "id_Post", title, content, photo, date_created FROM posts WHERE author_post = $1 AND active = true ORDER BY id ASC'

            const result = await pool.query(query, [object.author_post])
            return result.rows
        } catch (error) { throw error }
    }

    async getPostById(object) {
        try {
            const query = 'SELECT author_post, id AS "id_Post", title, content, date_created FROM posts WHERE id = $1 AND active = true'

            const result = await pool.query(query, [object.id_post])
            if (result.rows.length === 0) throw new Error('Post not found.')

            return result.rows
        } catch (error) { throw error }
    }

    async createPost(object) {
        try {
            const query = 'INSERT INTO posts (author_post, title, content, photo) VALUES ($1, $2, $3, $4) RETURNING author_post, id, title, content, photo, date_created'
            const params = [object.author_post, object.title, object.content, object.photo]

            const result = await pool.query(query, params)
            if (result.rows.length === 0) throw new Error('Post not created.')

            return result.rows[0]
        } catch (error) { throw error }
    }

    async deletePost(object) {
        try {
            const query = 'Update posts SET active = false WHERE id = $1 AND active = true AND author_post = $2 RETURNING id, title, content'

            const result = await pool.query(query, [object.id_post, object.author_post])
            if (result.rowCount === 0) throw new Error('Error deleting post.')

            return result.rows[0]
        } catch (error) { throw error }
    }

    async updatePost(object) {
        try {
            let query = 'Update posts SET '
            let count = 0
            let params = []
            let updates = [] // Array para almacenar las partes a actualizar

            if (object.title) {
                count++
                updates.push(`title = $${count}`)
                params.push(object.title)
            }

            if (object.content) {
                count++
                updates.push(`content = $${count}`)
                params.push(object.content)
            }

            query += updates.join(', ')

            count++
            query += ` WHERE id = $${count} AND active = true AND `

            count++
            query += `author_post = $${count} RETURNING id, title, content`

            params.push(object.id_post)
            params.push(object.author_post)

            const result = await pool.query(query, params)
            if (result.rowCount === 0) throw new Error('Error updating post.')

            return result.rows[0]
        } catch (error) { console.log(error); throw error }
    }

    async getCommentsByPostId(object) {
        try {
            const query = 'SELECT id, author_comment, content, date_created FROM comments WHERE post_id = $1 AND active = true ORDER BY id ASC'
            const result = await pool.query(query, [object.post_id])
            return result.rows
        } catch (error) { throw error }
    }
}

module.exports = PostsModel 