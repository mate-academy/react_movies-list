import React from 'react';
import propTypes from 'prop-types';

import { MovieCard } from '../MovieCard/MovieCard';

import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        title={movie.title}
        description={movie.description}
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: propTypes.arrayOf(propTypes.shape({
    key: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    imgUrl: propTypes.string.isRequired,
    imdbUrl: propTypes.string.isRequired,
  })).isRequired,
};
