import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieCard = ({ title, image, description }) => {
  return (
        <Movie>
          <StyledLinks to={"/movie/&title=" + title}>
            <img src={image} alt={title} loading="lazy" />
            <Info>
              <h2>{title}</h2>
              <h3>{description}</h3>
            </Info>
          </StyledLinks>
        </Movie>
  );
};

const Movie = styled.div`
  width: 200px;
  margin: 10px;
  background-color: black;
  text-decoration: none;
  border-radius: 5px;
  overflow: hidden;
 
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const StyledLinks = styled(Link)`
  text-decoration: none;
`

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px; 

  h2, h3{
    margin:0;
    font-size:15px;
    text-decoration: none;
    color:white;
    font-weight: 700;
  } 
`;

export default MovieCard;
