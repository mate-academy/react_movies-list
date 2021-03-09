import React from 'react';
import PropTypes from 'prop-types';
import { MovieType } from '../../types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        title={movie.title}
        description={movie.description}
        imagePath={movie.imgUrl}
        imdbPath={movie.imdbUrl}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieType),
};

MoviesList.defaultProps = {
  movies: [],
};
