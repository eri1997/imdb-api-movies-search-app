import {useParams} from "react-router-dom"
import ExtraMovieInfo from '../components/ExtraMovieInfo'
import useFetch from '../Utils/useFetch'

const Movie = () => {

  let params= useParams()

  const {data:movieInfo,isPending,error} = useFetch(params.title)

  return (
    <div>
      {isPending && <div>LOADING MOVIES...</div>}
      {error && <div> {error} </div>}
      {movieInfo.map(item=><ExtraMovieInfo {...item} key={item.id} />)}
    </div>
  )
}

export default Movie