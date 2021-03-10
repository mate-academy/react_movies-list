import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieType } from '../../types';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieType),
};

MoviesList.defaultProps = {
  movies: [],
};
