import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import movieCardShape from '../shapes/MovieCardShape';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieCardShape).isRequired,
};

export default MoviesList;
