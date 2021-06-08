import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { CardType } from '../../types';

export const MoviesList = ({ moviesList }) => (
  <>
    <div className="movies">
      {moviesList.map(movie => <MovieCard movie={movie} key={movie.title} />)}
    </div>
  </>
);

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(CardType).isRequired,
};
