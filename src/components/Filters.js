import {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Filters = ({setShowFilters}) => {
    const [minRating, setMinRating] = useState("")
    const [maxRating, setMaxRating] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [genres, setGenres] =  useState([])
    const AllGenres = ["action","adventure","animation","biography","comedy","crime","documentary","drama","family","fantasy","thriller"]
    let url=""
    const navigate= useNavigate()

    const updateUrl=()=>{
      if (minRating || maxRating){
         url += `&user_rating=${minRating ? minRating : ""}${maxRating ? ","+ maxRating : ""}`   
      }
      if (startDate || endDate){
        url += `&release_date=${startDate ? startDate : ""}${endDate ? ","+ endDate : ""}`   
     }
     if(genres.length > 0){
      url += `&genres=${genres}`
     }
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if(minRating || maxRating || startDate || endDate || genres.length > 0){
        updateUrl()
        setShowFilters(false)
        navigate("/filtered/" + url)
      }else{
        alert("You need at least 1 filter to search for movies!")
      }
      }

    const handleCheckBoxChange= (e)=>{
        const {checked,value} = e.target
        if(checked){
          setGenres(prevGenres=>[...prevGenres, value])
        }
        else{
          setGenres(prevGenres=>prevGenres.filter((item) => item !== value))
        }
    }

  return (
    <ModalContainer>
        <Modal>
        <form onSubmit={handleSubmit}>
          <h3>USER RATING:</h3>
          <Input type="number" min="1.0" max="10.0" placeholder="Minimum Rating" step=".1" value={minRating} onChange={(e=>setMinRating(e.target.value))} />    
          <span> to </span>
          <Input type="number" min="1.0" max="10.0" placeholder="Maximum Rating" step=".1" value={maxRating} onChange={(e=>setMaxRating(e.target.value))} />          
          <p>Format: Values from 1.0 to 10.0</p>
          <h3>RELEASE DATE:</h3>
          <Input type="text" placeholder="Start date" pattern="\d{4}-\d{1,2}-\d{1,2}|\d{4}-\d{1,2}|\d{4}" value={startDate} onChange={(e)=>setStartDate(e.target.value)} />         
          <span> to </span>
          <Input type="text" placeholder="End date" pattern="\d{4}-\d{1,2}-\d{1,2}|\d{4}-\d{1,2}|\d{4}" value={endDate} onChange={(e)=>setEndDate(e.target.value)} />         
          <p>Format: YYYY-MM-DD, YYYY-MM, or YYYY</p>
          <h3>GENRES:</h3>
          <GenreContainer>
          {AllGenres.map((genre,index)=>{
            return(
              <div key={index}>
              <input type="checkbox" name="check" value={genre} onChange={handleCheckBoxChange} />
              <span>{genre.toUpperCase()}</span>
              </div>
            )
          })}
          </GenreContainer>
          <ButtonContainer>
          <SearchButton>Search</SearchButton>
          <CancelButton type="button" onClick={()=>setShowFilters(false)}>Cancel</CancelButton>
          </ButtonContainer>
        </form>
      </Modal>
    </ModalContainer>
  )
}

const GenreContainer = styled.div`
  display:flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
    
`

const ButtonContainer=styled.div`
  display: flex;
  justify-content: center;
  gap:10px;
`
const SearchButton = styled.button`
  background: transparent;
  padding: 10px 20px;
  font-size: 15px;
  color: green;
  border: 1px solid green;
  margin-top: 40px;
  border-radius: 5px;
  cursor: pointer; 
  `
const CancelButton = styled.button`
  background: transparent;
  padding: 10px 20px;
  font-size: 15px;
  color: red;
  border: 1px solid red;
  margin-top: 40px;
  border-radius: 5px;
  cursor: pointer;
`
const Input = styled.input`
    margin-bottom: 15px;
    height: 30px;
    text-indent: 10px;
    border: 1px solid #444;
    border-radius: 5px;
    width:150px;
`

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Modal = styled.div`
  background: white;
  color:black;
  width: 80vw;
  max-width: 400px;
  border-radius: 5px;
  padding: 30px 20px;
  text-align: center;
    h3{
      font-size: 17px;
    }
    span{
      font-size: 14px;
      font-style:italic;
    }
    p{
      font-style: italic;
      font-size: 14px;
      margin-top: 4px;
    }
`
export default Filters