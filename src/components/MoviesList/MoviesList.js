import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = ({ list }) => (
  <>
    {list.map(item => <MovieCard key={item.imdbId} card={item} />)}
  </>
);

MoviesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MoviesList;
