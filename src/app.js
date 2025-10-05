// Importación de librerías
const express = require('express')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

// Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../docs/swagger.json')

// Rutas de la API
const posts = require('./routes/posts.route')
const auth = require('./routes/auth.route')
const register = require('./routes/register.route')
const user = require('./routes/user.route')
const { url } = require('inspector')

// inicializacion del app
const app = express()

// Puerto de ejecucion
app.set('port', process.env.PORT)

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
} else { app.use(morgan("combined")) }

// Rutas
const urlBase = "/blog/api"

app.use(urlBase + "/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(urlBase, posts)
app.use(urlBase, auth)
app.use(urlBase, register)
app.use(urlBase, user)

module.exports = app