import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = ({ movieslist }) => (
  movieslist.map(item => <MovieCard key={item.imdbId} {...item} />)
);

MoviesList.propTypes = {
  movieslist: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MoviesList;
