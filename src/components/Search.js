import {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [search , setSearch] = useState('') 
    const navigate = useNavigate()

    const handleSubmit= (e) =>{
      e.preventDefault()
      navigate("/search/" + search)
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <SearchBar type="text" placeholder="Search by movie name" value={search} onChange={e=>setSearch(e.target.value)} />  
    </form>
  )
}

const SearchBar = styled.input`
    height: 30px;
    border: 1px solid #444;
    border-radius: 5px;
    width:250px;
    background-color: white;
`

export default Search