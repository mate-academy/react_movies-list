import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { cardsProp } from '../../PropTypes';

export const MoviesList = (props) => {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = cardsProp.isRequired;
