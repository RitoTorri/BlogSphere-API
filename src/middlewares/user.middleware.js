const response = require('../utils/responses')
const validator = require('../utils/formatData')

const GetUsers = async (req, res, next) => {
    const { name } = req.body

    if (!name) return response.BadRequest(res, 'The name parameter is required.')
    if (validator.formatTextInvalid(name)) return response.BadRequest(res, 'The name parameter is invalid.')
    next()
}

const createdComment = async (req, res, next) => {
    const { post_id, author_comment, content } = req.body

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

module.exports = { GetUsers, createdComment }