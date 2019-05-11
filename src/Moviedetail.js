import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";

const LinkStyled = styled(Link)`
  color: #000;
  text-decoration: none;
  background-color: white;
  width: 40%;
  display: flex;
  padding: 0 1.2rem;
  margin: 2rem 0;
  justify-content: space-between;
  align-itmes: flex-start;
  flex-wrap: warp;
  text-overflow: ellpsis;
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3),
    0 5px 12px rgba(133, 133, 133, 0.22);
`;

// const Main = styled.div`
//   background-color: white;
//   width: 40%;
//   display: flex;
//   padding: 0 1rem;
//   justify-content: space-between;
//   align-itmes: flex-start;
//   flex-wrap: warp;
//   text-overflow: ellpsis;
//   box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3),
//     0 5px 12px rgba(133, 133, 133, 0.22);
//   border: 2px solid black;
// `;
// border: 2px solid black;

const Movie_Columns = styled.div`
  width: 30%;
  box-sizing: border-box;
  text-overflow: ellipsis;
`;
const Movie_Columns2 = styled.div`
  width: 60%;
  padding: 1.5rem 0 0.7rem;
`;
const Movie_Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;
const Movie_Genre = styled.span`
  margin-right: 10px;
  color: #b4b5bd;
`;
const Movie_Summary = styled.div`
  text-overflow: ellipsis;
  color: #b4b5bd;
  overflow: hiddenl;
`;
const Movie_Poster = styled.img`
  max-width: 100%;
  position: relative;
  top: -1.3rem;
  box-shadow: -10px 19px 38px rgba(83, 83, 83, 0.3),
    10px 15px 12px rgba(80, 80, 80, 0.22);
`;
const H1 = styled.div`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 20px;
`;

function Movie({ id, title, poster, genres, summary }) {
  console.log({ summary }, { title });
  return (
    <LinkStyled to={`/details/${id}`}>
      {/* <Main> */}
      <Movie_Columns>
        <MoviePoster poster={poster} alt={title} />
      </Movie_Columns>
      <Movie_Columns2>
        <H1>{title} </H1>
        <Movie_Genres>
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </Movie_Genres>
        <Movie_Summary>
          <LinesEllipsis
            text={summary}
            maxLine="4"
            ellipsis="..."
            trimRight
            baseon="letters"
          />
        </Movie_Summary>
      </Movie_Columns2>
      {/* </Main> */}
    </LinkStyled>
  );
}

function MovieGenre({ genre }) {
  return <Movie_Genre>{genre} </Movie_Genre>;
}

function MoviePoster({ poster }) {
  return <Movie_Poster src={poster} alt="Movie Poster" />;
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired
};
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};
MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};
export default Movie;
