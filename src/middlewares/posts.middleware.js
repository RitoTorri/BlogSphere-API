// requires
const response = require('../utils/responses')
const validator = require('../utils/formatData')

const GetPostsUser = (req, res, next) => {
    const { id_user } = req.params

    if (!id_user) response.ParamUndefined(res, 'We need a id.')
    if (validator.formatNumberInvalid(id_user)) response.ParametersInvalid(res, 'The id is invalid. It must be a number.')

    next()
}

module.exports = { GetPostsUser }