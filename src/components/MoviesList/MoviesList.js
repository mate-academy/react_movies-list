import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = props => (
  <>
    <div className="movies">
      {props.moviesCards.map(movieCard => (
        <MovieCard movieCard={movieCard} key={movieCard.imdbId} />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  moviesCards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
