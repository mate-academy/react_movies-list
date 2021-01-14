import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { CardsType } from '../Types/Types';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(CardsType).isRequired,
};
