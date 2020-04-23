import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

let arr = [];

export const MoviesList = (props) => {
  arr = props.items;

  return (
    <div className="movies">
      {arr.map(item => <MovieCard key={item.imdbId} items={item} />)}
    </div>
  );
};

MoviesList.propTypes = {
  items: PropTypes.string.isRequired,
};
