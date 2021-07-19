import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { moviesShape } from '../../type';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {
      movies.map(movie => (
        <div className="card" key={movie.imdId}>
          <MovieCard {...movie} />
        </div>
      ))
    }
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(moviesShape),
  ).isRequired,
};
