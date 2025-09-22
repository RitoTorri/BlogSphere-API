// requires
const response = require('../utils/responses')
const validator = require('../utils/formatData')

const GetPostsUser = (req, res, next) => {
    const { id_user } = req.params

    if (!id_user) response.ItemNotFound(res, 'We need a id.')

    if (validator.formatNumberInvalid(id_user)) return response.ParametersInvalid(res, 'The id is invalid. It must be a number.')

    next()
}

const CreatePost = (req, res, next) => {
    const { id_user, title, content } = req.body

    let error = false
    let details = []

    if (validator.formatDataEmpty(id_user)) {
        error = true
        details.push('We need a id.')
    }

    if (validator.formatDataEmpty(title)) {
        error = true
        details.push('We need a title.')
    }

    if (validator.formatDataEmpty(content)) {
        error = true
        details.push('We need a content.')
    }

    if (validator.formatNumberInvalid(id_user)) {
        error = true
        details.push('The id is invalid. It must be a number.')
    }

    if (validator.formatTextInvalid(title)) {
        error = true
        details.push('The title is invalid.')
    }

    if (validator.formatTextInvalid(content)) {
        error = true
        details.push('The content is invalid.')
    }

    if (error) return response.ParametersInvalid(res, details)

    next()
}

const DeletePost = (req, res, next) => {
    const { id_post } = req.params

    if (!id_post) response.ItemNotFound(res, 'We need a id post.')
    if (validator.formatNumberInvalid(id_post)) return response.ParametersInvalid(res, 'The id is invalid. It must be a number.')

    next()
}

module.exports = { GetPostsUser, CreatePost, DeletePost }