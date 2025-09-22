const pg = require('pg')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

// Variable de conexion a la db
const pool = new pg.Pool({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.NAME_DB,
    password: process.env.PASSWORD_DB,
    port: process.env.PORT_DB
})

pool.on('error', (err) => {
    console.error("Error en la base de datos: ", err)
})

pool.on('connect', () => {
    console.log("conectado a la base de datos.")
})

module.exports = { pool }