import React from "react";
import { MOVIE_DETAILS } from "./queries";
import { Helmet } from "react-helmet";
// import MovieCard from "./Movie-card";
import styled, { css, keyframes } from "styled-components";
import { useQuery } from "react-apollo-hooks";
import Newmovie from "./Moviedetail";

const Container = styled.div`
  margin-bottom: 5rem;
  padding: 3.5rem 2rem 3rem;
  justify-content: center;
`;

const ReviewCard = styled.div`
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.19), 6px 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 345px;
  border-radius: 7px;
  margin: 0 0 2.5rem;
  min-width: 430px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
  }

  &:hover #before {
    opacity: 0.2;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
  }
  &:hover #after {
    opacity: 1;
    color: white;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    border-radius: 7px;
    z-index: 20;
  }
  &:hover #after::after {
    opacity: 1;
    -webkit-transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 1, 1);
    transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 1, 1);
  }
`;
// background-color: ${props => (props.danger ? "#bf34fc" : "#2bc534")};

//   ${props => {
//     if (props.danger) {
//       return css`
//         animation: ${rotation} ${props.rotationTime}s linear infinite;
//       `;
//     }
//   }}
const Card = styled.div`
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 7px;
  position: absolute;
  transform-style: preserve-3d;
  transition: all 1s;
`;

const Vailed = styled.div`
  display: flex;
  height: 345px;
  min-width: 430px;
  left: 43%;
  position: absolute;
  text-transform: none;
  font-size: 0.85em;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  font-family: Arial, Helvetica, sans-serif;

  &::after {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    content: "";
    opacity: 0;
    -webkit-transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1);
    transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
`;

const Coment = styled.p`
  text-align: center;
  color: white;
  line-height: 1.1;
  font-size: 2em;
  font-wieght: 700;
`;

const Image = styled(Card.withComponent("img"))`
  position: relative;
  margin-right: 5px;
  transform: rotateY(0deg);
`;

const Text = styled.div`
  display: block;
  padding: 1rem 1rem;
  position: relative;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.span`
  margin-bottom: 10px;
  display: block;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  line-height: 1.2em;
  max-height: 13.1em;
  text-align: justify;
  margin-bottom: -1.2em;
  padding-bottom: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
 }
`;
const NewContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 15px;
`;
// const MovieContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 0.7fr);
//   flex-wrap: wrap;
//   justify-items: center;
//   margin: 1rem 0px 6rem;
// `;
const Loadmsg = styled.div`
  font-size: 20px;
  display: flex;
  padding: 3rem 2rem;
  align-content: center;
  justify-content: center;
`;
const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  const { loading, error, data } = useQuery(MOVIE_DETAILS, {
    variables: { movieId: parseInt(movieId, 10) }
  });
  console.log(movieId);
  if (loading)
    return (
      <React.Fragment>
        <Loadmsg>"Loading"</Loadmsg>
      </React.Fragment>
    );
  if (error) return "error";

  return (
    <React.Fragment>
      <Container>
        <Title>Information</Title>
        <Helmet>
          <title>{data.movie.title} | MovieQL</title>
        </Helmet>
        <ReviewCard id="card">
          <Vailed id="after">
            <Coment>"</Coment> <Coment>나타날 글자</Coment>
            <Coment>"</Coment>
          </Vailed>
          <Image src={data.movie.medium_cover_image} id="before" />
          <Text id="before">
            <Title>{data.movie.title}</Title>
            {/* <Paragraph>
              <b>Rating: {data.movie.rating}</b>
               font-weight: ${props => (props.bold ? "500" : "400")}

            </Paragraph> */}
            <Paragraph>{data.movie.description_intro}</Paragraph>
          </Text>
        </ReviewCard>

        {/* <MovieCard
          id={movieId}
          poster={data.movie.medium_cover_image}
          title={data.movie.title}
        /> */}

        <Title>Suggested</Title>
        {/* <MovieContainer> */}
        <NewContainer>
          {data.suggestions.map(movie => (
            <Newmovie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              genres={movie.genres}
              poster={movie.medium_cover_image}
              summary={movie.summary}
            />
          ))}
        </NewContainer>
      </Container>
    </React.Fragment>
  );
};

export default Detail;
