import styled from 'styled-components'
import MovieCard from './MovieCard'
import useFetch from '../Utils/useFetch'

const MovieList = () => {

    const {data:movies, error, isPending} = useFetch("")
  
  return (
    <>
    <PageTitle>TOP 250 IMDB MOVIES</PageTitle>
    <Container>
        {isPending && <div>LOADING MOVIES...</div>}
        {error && <div> {error} </div>}
        {movies.map(movie=><MovieCard {...movie} key={movie.id} />)}
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