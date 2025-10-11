// requires
const response = require('../../shared/utils/responses')

// instancias de Services
const User = require('./auth.service')
const user = new User()

class AuthController {
    constructor() { }

    async login(req, res) {
        try {
            const { email, password } = req.body
            const object = { email: email, password: password }

            const result = await user.login(object)
            return response.QuerySuccess(res, "Token Access: " + result)

        } catch (error) {
            if (error.message === 'User not found.') return response.ItemNotFound(res, 'Not found a user with this email.')
            if (error.message === 'Password not valid.') return response.BadRequest(res, 'Password incorrect.')
            return response.ErrorInternal(res, error.message)
        }
    }
}

module.exports = AuthController