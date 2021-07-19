import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard, typesOfMovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ moviesFromServer }) => (
  <>
    <div className="movies">
      {moviesFromServer.map(title => (
        <MovieCard
          item={title}
          key={title.imdbId}
        />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(typesOfMovieCard).isRequired,
};
