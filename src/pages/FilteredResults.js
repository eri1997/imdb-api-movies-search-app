import {useState,useEffect} from 'react'
import styled from 'styled-components'
import MovieCard from '../components/MovieCard'
import { useParams } from 'react-router-dom'


const FilteredResults = () => {
  const [movies, setMovies] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  let params = useParams()


  const filteredMovies = async() =>{
      try {
        const data = await fetch(`https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_API_KEY}?groups=top_250${params.filters}&count=250`)
        const res = await data.json()
        setMovies(res.results)
        setIsPending(false)
        setError(null)
      } catch(err){
          setError(err.message)
          setIsPending(false)
      }}

  useEffect(()=>{
      filteredMovies()
  },[params.filters])  

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
`


export default FilteredResults