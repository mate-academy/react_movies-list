import React from 'react';
import './MoviesList.scss';
import PropTypes, { shape } from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ moviesFromServer }) => (
  <ul className="movies">

    {moviesFromServer.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}

  </ul>
);

MoviesList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
  })).isRequired,
};
