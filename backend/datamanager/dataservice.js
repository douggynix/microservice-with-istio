const uuid = require('uuid')
const os = require('os')

//console.log(uuid.v4())


const getRandomData = () => {
    const backendName = process.env.BACKEND_NAME 
                        ? `${process.env.BACKEND_NAME}_${os.hostname}`
                        : `Backend_${os.hostname}`
    const detail = `${backendName} has cpus=${os.cpus()[0].model}`
                 + ` memory=${os.totalmem}`
                 + ` network_interfaces=${Object.keys(os.networkInterfaces())}`
    return {
        id: uuid.v4(),
        title : backendName,
        description: detail
    }
}

//console.log(getRandomData())

//console.log(os.networkInterfaces())

module.exports = {getRandomData}