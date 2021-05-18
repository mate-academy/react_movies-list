import React from 'react';
import './MoviesList.scss';
import propTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <>
    <div className="page-content">
      <div className="movies">
        {movies.map(movie => (
          <div className="card" key={movie.imdbId}>
            <MovieCard {...movie} />
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
  movies: propTypes.arrayOf(
    propTypes.shape({
      imdbId: propTypes.number.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
