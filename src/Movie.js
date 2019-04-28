import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center center;
  height: 280px;
  width: 200px;
  margin-bottom: 40px;
  position: relative;
`;

const Image = Card.withComponent("img");

const Title = styled.span`
  background-color: rgba(36, 36, 36, 0.8);
  width: auto;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Movie = ({ id, title, genres, poster }) => (
  <Link to={`/details/${id}`}>
    <Card background={poster}>
      <Title>
        {title}⭐️
        <div>{genres[0]}</div>
      </Title>
    </Card>
  </Link>
);

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
