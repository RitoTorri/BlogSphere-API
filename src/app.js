// Importación de librerías
const express = require('express')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

// Rutas de la API
const posts = require('./routes/post.route')

// inicializacion del app
const app = express()

// Puerto de ejecucion
app.set('port', process.env.PORT)

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

// Rutas
const urlBase = "/blog/api"

app.use(urlBase, posts)

module.exports = app