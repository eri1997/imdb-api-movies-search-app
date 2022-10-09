import {useState,useEffect} from 'react'
import MovieCard from '../components/MovieCard'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


const SearchResults = () => {
    const [movie, setMovie] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    let params = useParams()

    const searchedMovie = async() =>{
      try{
        const data = await fetch(`https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_API_KEY}?title=${params.title}&groups=top_250&count=250`)
        const res = await data.json()
        setMovie(res.results)
        setIsPending(true)
        setError(null)
      }catch(err){
        setError(err.message)
        setIsPending(false)
      }
        
      }

    useEffect(()=>{
        searchedMovie()
    },[params.title])  

  return (
    <Container>
    <h2>Search results for: {params.title}</h2>
    <Wrapper> 
        {isPending && <div>LOADING MOVIES...</div>}
        {error && <div> {error} </div>}
        {movie.map(item=><MovieCard {...item} key={item.id} />)}
    </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`
const Container = styled.div`
  margin-top:100px;
`
export default SearchResults