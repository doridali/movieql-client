import React, { Component } from "react";
import { MOVIE_DETAILS } from "./queries";
import { useQuery } from "react-apollo-hooks";
import PropTypes from "prop-types";
import Movie from "./Moviedetail";
import styled from "styled-components";

// import { Link } from "react-router-dom";
// import styled from "styled-components";
const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 15px;
`;
const MovieCard = ({ movieId, poster, title }) => {
  return (
    <div>
      <MoviePoster poster={poster} title={title} />
      <MovieArray />
    </div>
  );
};

class MovieArray extends Component {
  state = {};

  static propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string
  };
  componentWillMount() {
    console.log("will mount");
  }

  //   #컴포넌트가 마운트 된 다음에 5초 뒤 메세지 변경
  componentDidMount() {
    this._getMovies();
    // setTimeout(() => {
    //   this.setState({
    //     movies: [
    //       // state를 그대로 두고 새 데이터를 추가한다는 의미, 삭제하면 아래 1개 데이터로 대치됨
    //       //인스타나 페북의 추가 포스팅 로딩에 사용하는 것과 동일
    //       // ...this.state.MovieList,

    //       {
    //         title: "a",
    //         img: "dfd.png"
    //       },
    //       {
    //         title: "b",
    //         img: "dss.png"
    //       }
    //     ]
    //   });
    // }, 3000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (
        <Movie
          title={movie.title}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          summary={movie.summary}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    // #_callApi가 끝나야 getMovie가 실행된다
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=year")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </Container>
    );
  }
}
// function MovieArray({title, poster}){
//   return
// }
// class MoviePoster extends Component {
//   render() {
//     return (
//       <div>
//         <img src={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }
function MoviePoster({ poster, title }) {
  return (
    <div>
      <img src={poster} />
      <h1>{title}</h1>
    </div>
  );
}

export default MovieCard;
