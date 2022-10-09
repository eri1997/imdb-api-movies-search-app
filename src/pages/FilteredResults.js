import styled from 'styled-components'
import MovieCard from '../components/MovieCard'
import { useParams } from 'react-router-dom'
import useFetch from '../Utils/useFetch'


const FilteredResults = () => {

  let params = useParams()

  const {data:movies,isPending,error} = useFetch(params.filters)

return (
  <Container>
  <h2>Search results for the selected filters</h2>
  <Wrapper> 
      {isPending && <div>LOADING MOVIES...</div>}
      {error && <div> {error} </div>}
      {movies.map(item=><MovieCard {...item} key={item.id} />)}
  </Wrapper>
  </Container>
)
}

const Container = styled.div`
  margin-top:100px
`
const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`


export default FilteredResults