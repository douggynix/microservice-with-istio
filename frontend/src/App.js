import CardList from "./components/CardList";
import axios from 'axios'
import { useState, useEffect } from "react";
import featureService from './services/features'

const  App = () => {
  const [features, setFeatures] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await featureService.getFeatures();
      console.log("DataFetched : ",res.data)
      return res;
    }
  
    fetchData().then( list => setFeatures(list))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  console.log("App Rendered: "+features)
  return (
      <div className="main">
        <CardList features={features} />
      </div>
  );
}

export default App;
