// requires
const response = require('../utils/responses')
const validator = require('../utils/formatData')

const GetPostsUser = (req, res, next) => {
    const { authorPostEmail } = req.params
    if (validator.formatEmailInvalid(authorPostEmail)) return response.ParametersInvalid(res, 'The email is invalid.')
    next()
}

const CreatePost = (req, res, next) => {
    const { author, title, content } = req.body

    let error = false
    let details = []

    if (validator.formatDataEmpty(title)) {
        error = true
        details.push('We need a title.')
    }

    if (validator.formatDataEmpty(content)) {
        error = true
        details.push('We need a content.')
    }

    if (validator.formatDataEmpty(author)) {
        error = true
        details.push('We need an author.')
    }

    if (validator.formatEmailInvalid(author)) {
        error = true
        details.push('The author email is invalid.')
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

    if (validator.formatNumberInvalid(id_post)) return response.ParametersInvalid(res, 'The id is invalid. It must be a number.')

    next()
}

const UpdatePost = (req, res, next) => {
    const { id_post } = req.params
    const { title, content } = req.body

    let error = false
    let details = []

    if (validator.formatDataEmpty(title)) {
        error = true
        details.push('We need a title.')
    }

    if (validator.formatDataEmpty(content)) {
        error = true
        details.push('We need a content.')
    }

    if (validator.formatNumberInvalid(id_post)) {
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

const getCommentsByPostId = (req, res, next) => {
    const { post_id } = req.params
    if (validator.formatNumberInvalid(post_id)) return response.ParametersInvalid(res, 'The post id is invalid. It must be a number.')
    next()
}


module.exports = { GetPostsUser, CreatePost, DeletePost, UpdatePost, getCommentsByPostId }