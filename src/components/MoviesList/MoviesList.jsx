import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <>
    { movies.map(movie => (
      <MovieCard
        title={ movie.title }
        description={ movie.description }
        imgUrl={ movie.imgUrl }
        imdbUrl={ movie.imdbUrl }
      />
    ))}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.array
}
