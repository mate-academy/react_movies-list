import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(film => (
      <MovieCard {...film} key={film.imdbId} />
    ))
    }
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { MoviesList };
