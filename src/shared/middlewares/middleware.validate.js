const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })
const response = require('../utils/responses')

const ValidateTokenAccess = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) return response.BadRequest(res, 'The token authentication is required.')

    try {
        const parts = authorization.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return response.ErrorAuthorization(res, 'The token is invalid. It must be a Bearer token.')
        }

        const token = parts[1]
        if (!token) return response.ErrorAuthorization(res, 'The token is required.')

        const decoded = jwt.verify(token, process.env.ACCESS_KEY)
        req.user = decoded
        next()

    } catch (error) {
        return response.ErrorAuthorization(res, error.message)
    }
}

module.exports = {
    ValidateTokenAccess
}