import React from 'react';
import PropTypes from 'prop-types';

import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ allMovies }) => (
  <>
    <div className="movies">
      {allMovies.map(movie => (
        <div
          key={movie.imdbId}
          className="card"
        >
          <MovieCard {...movie} />
        </div>
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  allMovies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  allMovies: [],
};
