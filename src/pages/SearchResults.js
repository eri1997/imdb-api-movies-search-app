import MovieCard from '../components/MovieCard'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import useFetch from '../Utils/useFetch'


const SearchResults = () => {
    let params = useParams()

    const {data:movie,isPending,error} = useFetch(params.title)

  return (
    <Container>
    <h2>Search results:</h2>
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
    flex-wrap: wrap;
`
const Container = styled.div`
  margin-top:100px;
`
export default SearchResults