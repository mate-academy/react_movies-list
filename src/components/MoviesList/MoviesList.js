import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard, MovieShape } from '../MovieCard/MovieCard';

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
  movies: PropTypes.arrayOf(MovieShape).isRequired,
};
