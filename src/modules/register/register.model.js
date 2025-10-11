const { pool } = require('../../config/db')

class RegisterModel {
    constructor() { }

    async register(object) {
        try {
            const query1 = 'SELECT email FROM users WHERE email = $1'
            const params1 = [object.email]

            const result = await pool.query(query1, params1)
            if (result.rows.length !== 0) throw new Error('This email is already registered.')

            const query2 = 'INSERT INTO users (email, password, name, lastname) VALUES ($1, $2, $3, $4)'
            const params2 = [object.email, object.password, object.name, object.lastname]

            return await pool.query(query2, params2)
        } catch (error) { throw error }
    }
}

module.exports = RegisterModel