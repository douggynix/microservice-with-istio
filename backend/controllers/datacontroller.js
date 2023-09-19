const dataRouter = require('express').Router()
const dataSevice = require('../datamanager/dataservice')

//return data
dataRouter.get("/", (req,res) =>{
    res.json(dataSevice.getRandomData())
})

module.exports = dataRouter