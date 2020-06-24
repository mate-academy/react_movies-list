import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { ShapeMovieCard } from '../schapes';

export const MoviesList = ({ movies }) => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {movies.map(item => (
          <MovieCard key={item.imdbId} {...item} />
        ))}
      </div>
    </div>
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(ShapeMovieCard).isRequired,
};
