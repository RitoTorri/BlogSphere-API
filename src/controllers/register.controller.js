const response = require('../utils/responses')

// instancias de Services
const User = require('../services/user.service')
const user = new User()

class RegisterController {
    constructor() { }

    async register(req, res) {
        try {
            const { email, password, name, lastname } = req.body
            const object = { email: email, password: password, name: name, lastname: lastname }

            await user.register(object)
            return response.QuerySuccess(res, 'The user was registered successfully.')

        } catch (error) {
            if (error.message === 'This email is already registered.') return response.ResConflict(res, 'The email is already registered.')
            return response.ErrorInternal(res, error.message)
        }
    }
}

module.exports = RegisterController