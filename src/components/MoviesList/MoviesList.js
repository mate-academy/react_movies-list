import React from 'react';
import PropTypes from 'prop-types';

import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        id={movie.imgUrl}
        imgUrl={movie.imgUrl}
        title={movie.title}
        description={movie.description}
        imdbUrl={movie.imdbUrl}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
