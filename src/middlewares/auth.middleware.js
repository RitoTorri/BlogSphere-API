const response = require('../utils/responses')
const validator = require('../utils/formatData')

const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const ValidateTokenAccess = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) return response.ParametersInvalid(res, 'The authorization header is required.')

    try {
        const parts = authorization.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return response.ParametersInvalid(res, 'The token is invalid. It must be a Bearer token.')
        }

        const token = parts[1]
        if (!token) return response.ParametersInvalid(res, 'The token is required.')

        const decoded = jwt.verify(token, process.env.ACCESS_KEY)
        req.user = decoded
        next()

    } catch (error) {
        return response.ErrorInternal(res, error.message)
    }
}

const ValidateLogin = (req, res, next) => {
    const { email, password } = req.body
    let error = false
    let details = []

    if (!email || !password) {
        return response.ParametersInvalid(res, 'The email and password are required.')
    }

    if (validator.formatEmailInvalid(email)) {
        error = true
        details.push('The email is invalid.')
    }

    if (validator.formatPasswordInvalid(password)) {
        error = true
        details.push('The password is invalid.')
    }

    if (error) return response.ParametersInvalid(res, details)
    next()
}

module.exports = { ValidateTokenAccess, ValidateLogin }