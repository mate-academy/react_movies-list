import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = (props) => {
  const { movies } = props;

  return (
    <>
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
