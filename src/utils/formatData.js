const formatEmailInvalid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return !emailRegex.test(email) ? true : false
}

const formatPasswordInvalid = (password) => {
    const allowedCharsRegex = /^[a-zA-Z0-9.#$%]+$/
    return !allowedCharsRegex.test(password) ? true : false
}

const formatDataEmpty = (data) => data.length === 0 ? true : false

const formatNamesInvalid = (data) => {
    const expression = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/
    return !expression.test(data) ? true : false
}

const formatPhoneInvalid = (phone) => {
    const phoneRegex = /^[0-9]+$/
    return !phoneRegex.test(phone) ? true : false
}

const formatNumberInvalid = (number) => {
    const numberRegex = /^[0-9]+$/
    return !numberRegex.test(number) ? true : false
}

const formatTextInvalid = (text) => {
    const textRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ¿?.+,:_%/\s-]+$/
    return !textRegex.test(text) ? true : false
}

module.exports = {
    formatEmailInvalid, formatPasswordInvalid, formatDataEmpty,
    formatNamesInvalid, formatPhoneInvalid, formatNumberInvalid,
    formatTextInvalid
}
