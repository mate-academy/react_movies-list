import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';
import { MovieCardType } from '../types/MovieCardType';

export const MovieList = ({ movies }) => {
  const MoviesArray = movies.map(movie => (
    <div className="movies">
      <MovieCard
        key={movie.imdbId}
        movie={movie}
      />
    </div>
  ));

  return (
    MoviesArray
  );
};

MovieList.propTypes = {
  source: PropTypes.arrayOf(MovieCardType),
};
