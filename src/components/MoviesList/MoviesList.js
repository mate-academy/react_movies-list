import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesArr }) => (
  <>
    <div className="movies">
      {moviesArr.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  moviesArr: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  moviesArr: [],
};
