import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCardPropType } from '../PropTypes/MovieCardPropType';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {movies.map(movie => (
          <MovieCard {...movie} key={movie.imdbId} />
        ))}
      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    MovieCardPropType,
  ).isRequired,
};
