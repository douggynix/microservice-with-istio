import axios from 'axios'

const getFeatures = async () => {
    const ENDPOINTS = ['/backendA', '/backendB',]
    let features = []
    for(let i=0; i< ENDPOINTS.length; i++ ){
        const res = await axios.get(ENDPOINTS[i]);
        const feature = res.data
        features = [...features, feature ]
    }
    return features;
}

const featureService = {getFeatures}

export default featureService