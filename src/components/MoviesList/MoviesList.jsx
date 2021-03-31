import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { movieShape } from '../shapes/index';

import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <>
    <div className="page-content">
      <div className="movies">
        {movies.map(movie => (
          <div className=".card" key={movie.imdbId}>
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(movieShape),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
