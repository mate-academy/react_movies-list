import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = ({ movies }) => (

  <div className="movies">
    {movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,

};

export default MoviesList;
