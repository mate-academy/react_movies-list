import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCardShape } from '../../types';
import { MovieCard } from '../MovieCard';

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
  movies: PropTypes.arrayOf(MovieCardShape).isRequired,
};
