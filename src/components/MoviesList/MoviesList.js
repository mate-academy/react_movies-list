import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = props => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {props.movies.map(movie => (
          <MovieCard {...movie} />))
        }
      </div>
    </div>
    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
