import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={Number(movie.imdbId.replace('tt', ''))} className="card">
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

const type = PropTypes.shape({
  description: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
});

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(type).isRequired,
};
