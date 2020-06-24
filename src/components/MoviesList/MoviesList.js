import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = props => (
  <div className="movies">
    {props.movies.map(item => (
      <MovieCard key={item.imdbId} {...item} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
