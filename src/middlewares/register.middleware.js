const response = require('../utils/responses')
const validator = require('../utils/formatData')

const ValidateRegister = (req, res, next) => {
    const { email, password, name, lastname } = req.body

    let error = false
    let details = []

    if (!email || !password || !name || !lastname) {
        return response.ParametersInvalid(res, 'The email, password, name and lastname are required.')
    }

    if (validator.formatEmailInvalid(email)) {
        error = true
        details.push('The email is invalid.')
    }

    if (validator.formatPasswordInvalid(password)) {
        error = true
        details.push('The password is invalid.')
    }

    if (validator.formatNamesInvalid(name)) {
        error = true
        details.push('The name is invalid.')
    }

    if (validator.formatNamesInvalid(lastname)) {
        error = true
        details.push('The lastname is invalid.')
    }

    if (error) return response.ParametersInvalid(res, details)
    next()
}

module.exports = { ValidateRegister }

