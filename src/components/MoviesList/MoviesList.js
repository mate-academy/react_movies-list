import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ list }) => (
  <div className="movies">
    {list.map(film => (
      <MovieCard key={film.imdbId} {...film} />
    ))}
  </div>
);

MoviesList.defaultProps = {
  list: [],
};

MoviesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
    }),
  ),
};
