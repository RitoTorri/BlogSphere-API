const RegisterModel = require('./register.model')
const registerModel = new RegisterModel()
const bcrypt = require('bcrypt')

class RegisterService {
    constructor() { }

    async register(object) {
        try {
            const password = await bcrypt.hash(object.password, 10)
            object.password = password

            return await registerModel.register(object)
        } catch (error) { throw error }
    }
}

module.exports = RegisterService