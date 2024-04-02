import { useEffect, useState } from "react"
import getRandomNumber from "./useGetRandomNumbers"

const useCapture = () => {
    const [number, setNumber] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [refresh, setRefresh] = useState(true)

    function handleClick (){
      setRefresh(!refresh)
    }

    useEffect(() => {
        setLoading(true)
      }, [refresh])
    
    
    useEffect(() => {
      getRandomNumber()
        .then(resp => setNumber(resp))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [refresh])



    return {error, loading, number, handleClick}
}

export default useCapture