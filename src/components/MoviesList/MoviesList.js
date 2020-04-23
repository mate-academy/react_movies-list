import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ moviesList }) => (
  <div className="movies">
    {moviesList.map(movie => (
      <div key={movie.imdbId} className="card">
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    imdbId: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};
