import React from 'react';
import PropTypes, { string } from 'prop-types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        {...movie}
        key={movie.imdbId}
      />
    ))}
  </div>
);
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: string.isRequired,
      imgUrl: string.isRequired,
      imdbUrl: string.isRequired,
      imdbId: string.isRequired,
      description: string,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
