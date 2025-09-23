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
}

module.exports = UsersModel