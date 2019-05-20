import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";
import { useQuery } from "react-apollo-hooks";
import Loader from "./Loader";

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
  padding: 3rem 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const Home = () => {
  const { data, error, loading } = useQuery(HOME_PAGE);
  return (
    <Container>
      <Helmet>
        <title>Home | MovieQL</title>
      </Helmet>

      {loading && <Loader style={{ margintop: "-3rem" }} />}
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
