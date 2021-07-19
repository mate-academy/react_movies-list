import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { TypeMovie } from '../../type';

export const MoviesList = ({ movies }) => (
  <>
    {
      movies.map(movie => (
        <div className="card" key={movie.imdbId}>
          <MovieCard {...movie} />
        </div>
      ))
    }
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    TypeMovie.isRequired,
  ).isRequired,
};
