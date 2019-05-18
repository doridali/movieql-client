import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 6.5) {
      id
      title
      genres
      medium_cover_image
    }
  }
`;
//Apollo를 위한 쿼리 작성
export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      id
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      title
      genres
      medium_cover_image
      summary
    }
    summary(id: $movieId) {
      summary
    }
  }
`;
