import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  (
    <div className="movies">
      <MovieCard movieInfo={movies} />
    </div>
  )
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    imgdbUrl: PropTypes.string,
    imdbId: PropTypes.string,
  })).isRequired,
};
