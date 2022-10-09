import Filters from "./Filters"
import Search from "./Search"
import {useState} from "react"
import styled from "styled-components"
import { BiCameraMovie } from 'react-icons/bi';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <NavbarContainer>
      <HomePageIcon to={"/"} >
        <BiCameraMovie />
        <h2>TOP IMDB MOVIES</h2>
      </HomePageIcon>
      <Search />
      <FilterButton type="button" onClick={()=>setShowFilters(prevState=>!prevState)}>FILTERS</FilterButton>
      {showFilters && <Filters setShowFilters={setShowFilters}/>}
    </NavbarContainer>
  )
}


const HomePageIcon = styled(Link)`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-right:auto;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  color:white;
  gap:5px;

  svg{
    font-size: 25px;
  }
`
const NavbarContainer = styled.div`
  background-color: #322e2d;
  color:white;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height:80px;
  position:fixed;
  top:0;
  width:100%;
  
`
const FilterButton = styled.button`
  background: #1b8370;
  padding: 5px 10px;
  font-size: 13px;
  color: white;
  border: 1px solid #1b8370;
  border-radius: 5px;
  cursor: pointer;
  margin-left:20px;
  font-weight: 500;
  margin-right:20px;
`
export default Navbar