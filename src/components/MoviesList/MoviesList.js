import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ listOfMovies }) => (
  <div className="movies">
    {listOfMovies.map(movie => (
      <div className="card" key={movie.imbdId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  listOfMovies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  listOfMovies: [],
};
