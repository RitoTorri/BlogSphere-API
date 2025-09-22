const QuerySuccess = (res, details) => {
    res.status(200).json({
        success: true,
        code: 'REQUEST_SUCCESSFUL',
        message: 'The request was successful.',
        details: details
    })
}

const ItemCreated = (res, details) => {
    res.status(201).json({
        success: true,
        code: 'ITEM_CREATED',
        message: 'The item was created successfully.',
        details: details
    })
}

const ParamsConflict = (res, details) => {
    res.status(409).json({
        success: false,
        code: 'PARAMETERS_CONFLICT',
        message: 'Some parameters conflict.',
        details: details
    })
}

const ParamUndefined = (res, details) => {
    res.status(404).json({
        success: false,
        code: 'PARAMETERS_UNDEFINED',
        message: 'Some parameters are not defined.',
        details: details
    })
}

const ParametersInvalid = (res, details) => {
    res.status(422).json({
        success: false,
        code: 'PARAMETERS_INVALID',
        message: 'Some parameters are invalid.',
        details: details
    })
}

const ItemNotFound = (res, details) => {
    res.status(404).json({
        success: false,
        code: 'ITEM_NOT_FOUND',
        message: 'The item was not found.',
        details: details
    })
}

const ErrorAuthorization = (res, details) => {
    res.status(401).json({
        success: false,
        code: 'ERROR_AUTHORIZATION',
        message: 'Authorization error.',
        details: details
    })
}

const ErrorInternal = (res, details) => {
    res.status(500).json({
        success: false,
        code: 'ERROR_INTERNAL',
        message: 'Internal error.',
        details: details
    })
}

module.exports = {
    ParamUndefined, ParametersInvalid, ItemNotFound, QuerySuccess, ParamsConflict, ItemCreated,
    ErrorAuthorization, ErrorInternal
}