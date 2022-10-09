import {useState,useEffect} from 'react'

const useFetch = (filteredInput) => {
   const [data, setData] = useState([])
   const [isPending, setIsPending] = useState(true)
   const [error, setError] = useState(null)
     
   useEffect(()=>{
    const apiCall= async()=>{
        try{
            const data = await fetch(`https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_API_KEY}?groups=top_250${filteredInput}&count=250`)
            const res = await data.json()
            setData(res.results)
            setIsPending(false)
            setError(null)
        }catch(err){
            setError(err.message)
            setIsPending(false)
        } 
       }
       apiCall()
   },[filteredInput])

  return {data, isPending, error}
}

export default useFetch