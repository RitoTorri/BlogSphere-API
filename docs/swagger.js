const swaggerAutoGen = require('swagger-autogen')

const outputFile = './swagger.json'
const endpointsFiles = ['../src/app.js']

const docs = {
    info: {
        title: 'Blog API',
        version: '1.0.0',
        description: 'Esta API permite subir y visualizar posts en un blog. Ademas de permitir modificar tu usaurio, buscar otros usuarios y hacer comentarios a otros posts/blogs.',
    },
    host: 'localhost:3000',
    schemes: ['http']
}

swaggerAutoGen()(outputFile, endpointsFiles, docs)