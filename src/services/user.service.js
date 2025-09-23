// requires
const bcrypt = require('bcrypt')

// instancia de modelos
const AuthModel = require('../models/auth.model')
const Authmodel = new AuthModel()

const RegisterModel = require('../models/register.model')
const registerModel = new RegisterModel()

class User {
    constructor() { }

    async login(object) {
        try {
            return await Authmodel.login(object)
        } catch (error) { throw error }
    }

    async register(object) {
        try {
            const password = await bcrypt.hash(object.password, 10)
            object.password = password

            return await registerModel.register(object)
        } catch (error) { throw error }
    }
}

module.exports = User