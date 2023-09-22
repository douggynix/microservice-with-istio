const isDev = process.argv.length > 2 && process.argv[2]==='--dev'
const BACKEND_NAME = process.env.BACKEND_NAME || 'Backend'

const app = require('./app')
const PORT = process.env.BACKEND_PORT || 3001

app.listen(PORT,() => {
    console.log(`${BACKEND_NAME} process is listening on port ${PORT}`)
})