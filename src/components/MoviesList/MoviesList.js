import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';
import { MovieCardShape } from '../shapes/MovieCardShape';

export const MoviesList = ({ movies }) => (

  <ul className="movies">
    {movies.map(
      movie => (
        <li className="card" key={movie.imdbId}>
          <MovieCard {...movie} />
        </li>
      ),
    )}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieCardShape).isRequired,
};
