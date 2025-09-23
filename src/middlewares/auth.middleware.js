const response = require('../utils/responses')
const validator = require('../utils/formatData')

const ValidateTokenAccess = (req, res, next) => {
    next()
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