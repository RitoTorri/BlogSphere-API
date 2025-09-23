// requires
const response = require('../utils/responses')

// instancias de Services
const User = require('../services/user.service')
const user = new User()

class AuthController {
    constructor() { }

    async login(req, res) {
        try {
            const { email, password } = req.body
            const object = { email: email, password: password }

            const result = await user.login(object)
            return response.QuerySuccess(res, result)

        } catch (error) {
            if (error.message === 'User not found.') return response.ItemNotFound(res, 'Not found a user with this email.')
            if (error.message === 'Password not valid.') return response.BadRequest(res, 'Password not valid.')
            return response.ErrorInternal(res, error.message)
        }
    }
}

module.exports = AuthController