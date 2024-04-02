import { useEffect, useState } from "react";

const useGetProducts = (data) => {

    const [content, setContent] = useState()

    useEffect(() => {

        async function getData(){
            const resp = await fetch(`https://dummyjson.com/${data}`)
            const info = await resp.json()
            setContent(info.products)
        }

        getData()

    }, [])
    
    return { content }
  
}

export default useGetProducts