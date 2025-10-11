const AuthModel = require('./auth.model')
const model = new AuthModel()

class AuthService {
    constructor() { }

    async login(object) {
        try {
            const user = await model.login(object)
            return user
        } catch (error) { throw error }
    }
}

module.exports = AuthService