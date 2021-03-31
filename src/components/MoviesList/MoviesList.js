import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(item => (
      <div className="card" key={item.imdbId}>
        <MovieCard {...item} />
      </div>
    ))
    }
  </div>
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
