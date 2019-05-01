import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";
import { useQuery } from "react-apollo-hooks";

// const Container = styled.div`

//   display: grid;
//   padding: 5rem
//   grid-template-columns: repeat(3, 0.7fr);
//   flex-wrap: wrap;
//   justify-items: center;

// `;
const Container = styled.div`
  width: 90%;
  display: flex;
  padding: 3.5rem 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
`;

const Loadmsg = styled.div`
  font-size: 20px;
  align-content: center;
`;

const Home = () => {
  const { data, error, loading } = useQuery(HOME_PAGE);
  return (
    <Container>
      <Helmet>
        <title>Home | MovieQL</title>
      </Helmet>

      {loading && <Loadmsg>"Loading"</Loadmsg>}
      {error && "Something is wrong"}
      {!loading &&
        data &&
        data.movies &&
        data.movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            poster={movie.medium_cover_image}
            title={movie.title}
            genres={movie.genres}
          />
        ))}
    </Container>
  );
};

export default Home;
