import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { Card } from "react-bootstrap";
// background-image: ${props => `url(${props.background})`};
// background-size: cover;
// background-position: center center;

const LinkStyled = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Cards = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  overflow: hidden;
  height: 280px;
  width: 200px;
  margin: 00px 10px 40px;
  position: relative;
`;

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
`;
const Imag = styled(Cards.withComponent("img"))`
  position: relative;
  width: 100%;
  margin: 0px;
`;
const Movie = ({ id, title, genres, poster }) => (
  <LinkStyled to={`/details/${id}`}>
    {/* <Card text="black" style={{ width: "200px", height: "280px" }}>
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title>Title: {title}</Card.Title>
        <Card.Text>Info of the movie</Card.Text>
      </Card.Body>
    </Card> */}

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
