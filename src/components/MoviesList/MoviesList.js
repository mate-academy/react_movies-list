import React from 'react';
import PropTypes, { object } from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {
      movies.map(
        element => <MovieCard {...element} />,
      )
    }
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(object).isRequired,
};
