import {useState, useEffect} from 'react'
import styled from 'styled-components'
import MovieCard from './MovieCard'

const MovieList = () => {
    const [movies , setMovies] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const fetchMovies = async () =>{
      try{
        const res = await fetch(`https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_API_KEY}?groups=top_250&count=250`)
        const data = await res.json()
        setMovies(data.results)
        setIsPending(false)
        setError(null)
      }catch(err){
        setIsPending(false)
        setError(err.message)
      }  
    }
  
    useEffect(()=>{
      fetchMovies()
    }, [])
  
  return (
    <>
    <PageTitle>TOP 250 IMDB MOVIES</PageTitle>
    <Container>
        {isPending && <div>LOADING MOVIES...</div>}
        {error && <div> {error} </div>}
        {movies?.length > 0 && movies.map(movie=><MovieCard {...movie} key={movie.id} />)}
    </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
const PageTitle=styled.h1`
    color:white;
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 25px;
    text-align: center;
    margin-top: 100px;
`
;

export default MovieList