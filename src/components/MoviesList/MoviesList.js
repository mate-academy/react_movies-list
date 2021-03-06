import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => {
  const moviesList = movies.map(
    movie => <MovieCard key={movie.imdbId} {...movie} />,
  );

  return (
    <div className="movies">
      {moviesList}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.number.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
