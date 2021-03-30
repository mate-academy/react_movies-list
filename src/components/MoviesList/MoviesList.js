import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <div key={movie.imdbId}>
          <MovieCard {...movie} />
        </div>
      ))}
    </div>
  </>
);

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
