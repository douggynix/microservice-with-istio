const express = require('express')
const cors =  require('cors')

const app = express()

const dataRouter = require('./controllers/datacontroller')

app.use(cors())
app.use('/',dataRouter)

module.exports = app