import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../appTypeDefs';
import { MovieCard } from '../MovieCard';

type MoviesListProps = {
  movies: Movie[];
};

interface State {
  activeMovieIndex: number;
}

export class MoviesList extends React.Component<MoviesListProps, State> {
  state = {
    activeMovieIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => (
        { activeMovieIndex: prevState.activeMovieIndex + 1 }
      ));
    }, 1000);
  }

  render(): React.ReactNode {
    return (
      <div className="movies">
        {this.props.movies.map((movie, index) => (
          <MovieCard
            key={movie.imdbId}
            title={movie.title}
            description={movie.description}
            imdbUrl={movie.imdbUrl}
            imgUrl={movie.imgUrl}
            active={index === this.state.activeMovieIndex % 5}
          />
        ))}
      </div>
    );
  }
}
