import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = props => (
  <div className="movies">
    {props.movies.map(itemOfList => (
      <MovieCard {...itemOfList} key={itemOfList.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {

  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
      imdbId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MoviesList;
