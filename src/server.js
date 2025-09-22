const app = require('./app')

const main = async () => {
    app.listen(app.set('port'), () => {
        console.log(`Server started on port http://localhost:${app.set('port')}`)
    })
}
main()