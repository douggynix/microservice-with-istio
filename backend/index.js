const isDev = process.argv.length > 2 && process.argv[2]==='--dev'
const BACKEND_NAME = process.env.BACKEND_NAME || 'Backend'

if(isDev){
    const app1 = require('./app')
    const port1=3001

    const app2 = require('./app')
    const port2 = 3002

    console.log('Dev mode Enabled. Starting 2 Backend services')
    app1.listen(port1,() => {
        console.log(`${BACKEND_NAME}_1 process is listening on port ${port1}`)
    })

    app2.listen(port2,() => {
        console.log(`${BACKEND_NAME}_2 process is listening on port ${port2}`)
    })
    return 
} 

const app = require('./app')
const PORT = process.env.BACKEND_PORT || 3001

app.listen(PORT,() => {
    console.log(`${BACKEND_NAME} process is listening on port ${PORT}`)
})