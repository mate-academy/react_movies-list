import PropTypes from 'prop-types';
import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export function MoviesList({
  movies,
}) {
  const listMovies = movies.map(
    movie => <MovieCard key={movie.imdbId} {...movie} />,
  );

  return (
    <div className="movies">
      {listMovies}
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
