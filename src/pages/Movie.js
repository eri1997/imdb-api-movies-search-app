import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import ExtraMovieInfo from '../components/ExtraMovieInfo'

const Movie = () => {
  const [movieInfo, setMovieInfo] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  
  let params= useParams()

  const singleMovie = async() =>{
    try{
      const data = await fetch(`https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_API_KEY}?title=${params.title}&groups=top_250&count=250`)
      const res = await data.json()
      setMovieInfo(res.results)
      setIsPending(false)
      setError(null)
    }catch(err){
      setError(err.message)
      setIsPending(false)
    }
    
  }

  useEffect(()=>{
        singleMovie()
  },[params.title])

  return (
    <div>
      {isPending && <div>LOADING MOVIES...</div>}
      {error && <div> {error} </div>}
      {movieInfo.map(item=><ExtraMovieInfo {...item} key={item.id} />)}
    </div>
  )
}

export default Movie