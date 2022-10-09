import React from 'react'
import styled from 'styled-components'
const ExtraMovieInfo = ({image, title, plot, runtimeStr, metacriticRating, stars,imDbRating,imDbRatingVotes}) => {
  return (
    <MovieDetails>  
        <HeaderImage src={image}  alt="" />
        <MovieInfo>
        <h2>{title}</h2> 
        <p>{plot}</p>
        <p>Runtime: {runtimeStr}</p>
        <p>Metacritic Rating: {metacriticRating}</p>
        <p>Stars: {stars}</p>
        <p>IMDB rating: {imDbRating}</p>
        <p>IMDB votes: {imDbRatingVotes}</p>
        </MovieInfo>
    </MovieDetails>
  )
}
const HeaderImage = styled.img`
    max-width:400px;
    align-self: center;
    flex:2;
    padding:50px;
`
const MovieDetails=styled.div`
    margin-top: 100px;
    font-size: 15px;
    display:flex;
    flex-direction: row;
`
const MovieInfo = styled.div`
    display:flex;
    flex-direction:column;
    flex:4;
    justify-content: center;
    color:white;
    p{
        margin-bottom:5px;
        font-size: 17px;
        font-weight: 500;
        padding-right: 20px;
    }
    h2{
        font-size: 25px;
        color:black;
        font-weight: bold;
    }
`
export default ExtraMovieInfo