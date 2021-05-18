import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
// import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (

  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      imdbId: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: '',
};
