import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ imdbId }) => (
  <div className="movies">
    {moviesFromServer.map(movie => <MovieCard {...movie} key={imdbId} />)}
  </div>
);

MoviesList.propTypes = {
  imdbId: PropTypes.string.isRequired,
};
