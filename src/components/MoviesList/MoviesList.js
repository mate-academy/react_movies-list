import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';

import { MovieCard } from '../MovieCard';
import { MovieShape } from '../../MovieShape';

export const MoviesList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieShape).isRequired,
};
