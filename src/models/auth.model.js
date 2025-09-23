const { pool } = require('../config/db')
const bcrypt = require('bcrypt')
const path = require('path')
const jwt = require('jsonwebtoken')

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

class AuthModel {
    constructor() { }

    async login(object) {
        try {
            const query = 'SELECT id, email, password, name, lastname FROM users WHERE email = $1 AND active = true'
            const params = [object.email]

            const result = await pool.query(query, params)
            if (result.rows.length === 0) throw new Error('User not found.')

            const validationPassword = await bcrypt.compare(object.password, result.rows[0].password)
            if (!validationPassword) throw new Error('Password not valid.')

            const token = jwt.sign({
                id: result.rows[0].id,
                email: result.rows[0].email,
                name: result.rows[0].name,
                lastname: result.rows[0].lastname
            }, process.env.ACCESS_KEY, { expiresIn: '1h' })

            return token
        } catch (error) { throw error }
    }
}

module.exports = AuthModel