import axios from 'axios'

const getFeatures = async () => {
    return  await Promise.all([ 
                            await axios.get('/backendA') , 
                            await axios.get('/backendB')
                        ])
                    .then( responses => responses.map( res => res.data))
}

const featureService = {getFeatures}

export default featureService