const response = require('../utils/responses')
const validator = require('../utils/formatData')

const GetUsers = async (req, res, next) => {
    const { name } = req.params
    if (!name) return response.BadRequest(res, 'The name parameter is required.')
    if (validator.formatTextInvalid(name)) return response.ParametersInvalid(res, 'The name parameter is invalid.')
    next()
}

const createdComment = async (req, res, next) => {
    const { post_id } = req.params
    const { author_comment, content } = req.body

    let error = false
    let details = []

    if (!author_comment || !content || !post_id) return response.BadRequest(res, 'The email, content and id_post parameters are required.')

    if (validator.formatNumberInvalid(post_id)) {
        error = true
        details.push('The id_post parameter is invalid.')
    }

    if (validator.formatEmailInvalid(author_comment)) {
        error = true
        details.push('The email parameter is invalid.')
    }

    if (validator.formatTextInvalid(content)) {
        error = true
        details.push('The comment parameter is invalid.')
    }

    if (error) return response.ParametersInvalid(res, details)
    next()
}

const deleteComment = async (req, res, next) => {
    const { id_comment } = req.params
    if (validator.formatNumberInvalid(id_comment)) return response.ParametersInvalid(res, 'The id_comment parameter is invalid.')
    next()
}

const editProfile = async (req, res, next) => {
    const { email, name, lastname, biography, photo } = req.body

    let error = false
    let details = []

    if (!email && !name && !lastname && !biography && !photo) {
        return response.ParametersInvalid(res, "The email, name, lastname, biography and photo parameters are required.")
    }

    if (email) {
        if (validator.formatEmailInvalid(email)) {
            error = true
            details.push('The email parameter is invalid.')
        }
    }

    if (name) {
        if (validator.formatNamesInvalid(name)) {
            error = true
            details.push('The name parameter is invalid.')
        }
    }

    if (lastname) {
        if (validator.formatNamesInvalid(lastname)) {
            error = true
            details.push('The lastname parameter is invalid.')
        }
    }

    if (biography) {
        if (validator.formatTextInvalid(biography)) {
            error = true
            details.push('The biography parameter is invalid.')
        }
    }

    if (error) return response.ParametersInvalid(res, details)
    next()
}

module.exports = { GetUsers, createdComment, deleteComment, editProfile }