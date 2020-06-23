import React from 'react';
import './MoviesList.scss';
import PropTypes, { object } from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <React.Fragment key={movie.imdbId}>
        <MovieCard movie={movie} />
      </React.Fragment>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(object).isRequired,
};
