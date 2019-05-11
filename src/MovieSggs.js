import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movie = ({ id, title, genres, poster }) => (
  <LinkStyled to={`/details/${id}`}>
    <Cards>
      <Imag src={poster} />
      <Title>
        {title} ⭐️
        <div>{genres[0]}</div>
      </Title>
    </Cards>
  </LinkStyled>
);

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
