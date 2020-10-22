import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MoviesList;
