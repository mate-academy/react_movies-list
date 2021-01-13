import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { TypeCard } from '../../types';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(TypeCard).isRequired,
};
