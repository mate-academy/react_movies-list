import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = props => (
  <div className="movies">
    {props.movies.map(movie => (
      <MovieCard {...movie} />
    ))
    }
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MoviesList;
