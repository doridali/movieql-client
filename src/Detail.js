import React from "react";
import { MOVIE_DETAILS } from "./queries";
import { Helmet } from "react-helmet";
import Movie from "./Movie";
import styled, { css, keyframes } from "styled-components";
import { useQuery } from "react-apollo-hooks";

const Container = styled.div`
  margin-bottom: 50px;
  padding: 3.5rem 2rem 0;
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
`;

const Card = styled.div`
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 7px;
  position: absolute;
  transform-style: preserve-3d;
  transition: all 1s;

  }
`;

const rotation = keyframes`
from {
  transform:rotateY(0deg);
}
to{
  transform:rotateY(180deg)
}`;
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

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
  margin: 1rem 0px 6rem;
`;
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

  return (
    <React.Fragment>
      <Container>
        <Helmet>
          <title>{data.movie.title} | MovieQL</title>
        </Helmet>
        <ReviewCard>
          <Image src={data.movie.medium_cover_image} />
          <Text>
            <Title>{data.movie.title}</Title>
            {/* <Paragraph>
              <b>Rating: {data.movie.rating}</b>
               font-weight: ${props => (props.bold ? "500" : "400")}

            </Paragraph> */}
            <Paragraph>{data.movie.description_intro}</Paragraph>
          </Text>
        </ReviewCard>
        <Title>Suggested</Title>
        <MovieContainer>
          {data.suggestions.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              genres={movie.genres}
              poster={movie.medium_cover_image}
            />
          ))}
        </MovieContainer>
      </Container>
    </React.Fragment>
  );
};

export default Detail;
