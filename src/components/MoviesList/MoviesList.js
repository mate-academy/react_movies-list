import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import MovieCard from '../MovieCard/MovieCard';

// one movie
const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      imdbUrl: PropTypes.string,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};

export default MoviesList;
