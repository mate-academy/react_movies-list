import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <>
    <div className="page-content">
      <div className="movies">
        {movies.map(film => (
          <div key={film.imdbId} className="card">
            <MovieCard {...film} />
          </div>
        ))}
      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
