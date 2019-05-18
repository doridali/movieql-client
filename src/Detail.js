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

const Outbox = styled.div`
  position: relative;
  float: left;
  overflow: hidden;
  height: 345px;
  border-radius: 7px;
  margin: 0 0 2.5rem;
  min-width: 430px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.19), 6px 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;

  &:hover #card {
    background-color: rgba(0, 0, 20, 0.95);
  }

  &:hover #before {
    opacity: 0.15;
  }
  &:hover #popup {
    opacity: 1;
    z-index: 40;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    box-sizing: border-box;
  }
`;

const ReviewCard = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  // &::after {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   border-top: 1px solid #fff;
  //   border-bottom: 1px solid #fff;
  //   content: "";
  //   box-sizing: border-box;
  //   opacity: 0;
  //   -webkit-transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1);
  //   transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 0, 1);
  //   -webkit-transform-origin: 50% 50%;
  //   transform-origin: 50% 50%;
  //   -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  //   transition: opacity 0.35s, transform 0.35s;
  // }

  // &:hover::after {
  //   opacity: 1;
  //   -webkit-transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 1.7, 1);
  //   transform: rotate3d(0, 0, 1, 45deg) scale3d(1, 1.7, 1);
  // }
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
`;

const Vailed = styled.div`
  display: flex;
  height: 345px;
  width: 100%;
  min-width: 430px;
  position: absolute;
  padding: 0 3rem 0;
  text-transform: none;
  font-size: 0.85em;
  opacity: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale3d(0.8, 0.8, 1);
  transform: scale3d(0.8, 0.8, 1);
`;

const Blockq = styled.blockquote`
  font-family: Georgia, serif;
  font-weight: 100;
  font-size: 2rem;
  max-width: 600px;
  line-height: 1.4;
  position: relative;
  margin: 0;
  padding: 0.5rem;

  &:before,
  &:after {
    position: absolute;
    width: 4rem;
    height: 4rem;
    opacity: 0.8;
  }
  &:before {
    content: "“";
    color: #ffcc66;
    font-size: 6.5rem;
    left: -4rem;
    top: -2rem;
    opacity: 0.8;
  }
  &:after {
    content: "”";
    color: #ff67a0;
    font-size: 6.5rem;
    right: -5rem;
    bottom: 0rem;
  }
`;

const Coment = styled.p`
  font-family: "Song Myung", serif;
  text-decoration-style: solid;
  text-align: center;
  color: #fff;
  line-height: 1.1;
  font-wieght: 800;
  text-shadow: 2px 2px 1px rgba(250, 250, 250, 0.3);
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
  if (loading)
    return (
      <React.Fragment>
        <Loadmsg>"Loading"</Loadmsg>
      </React.Fragment>
    );
  if (error) return "error";
  console.log(data);
  return (
    <React.Fragment>
      <Container>
        <Title>Information</Title>
        <Helmet>
          <title>{data.movie.title} | MovieQL</title>
        </Helmet>
        <Outbox>
          <Vailed id="popup">
            <div style={{ alignSelf: "center", padding: "0 1rem" }}>
              <Blockq>
                <Coment>djfkjkd</Coment>
              </Blockq>
            </div>
          </Vailed>
          <ReviewCard id="card">
            <Image src={data.movie.medium_cover_image} id="before" />
            <Text id="before">
              <Title>{data.movie.title}</Title>
              {/* <Paragraph>
              <b>Rating: {data.movie.rating}</b>
               font-weight: ${props => (props.bold ? "500" : "400")}

            </Paragraph> */}
              <Paragraph>{data.movie.description_intro}</Paragraph>
            </Text>
          </ReviewCard>{" "}
        </Outbox>

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
