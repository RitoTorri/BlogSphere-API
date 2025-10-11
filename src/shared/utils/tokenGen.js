const path = require('path')
const jwt = require('jsonwebtoken')

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const GenToken = async (result) => {
    const token = jwt.sign({
        id: result.id,
        email: result.email,
        name: result.name,
        lastname: result.lastname,
        photo: result.photo,
        biography: result.biography
    }, process.env.ACCESS_KEY, { expiresIn: '3h' })
    return token
}

module.exports = { GenToken }