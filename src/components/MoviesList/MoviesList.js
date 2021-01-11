import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';

import { MovieCard } from '../MovieCard';

export const MoviesList = props => (
  <>
    {props.arr.map(obj => (
      <MovieCard {...obj} key={obj.imdbId} />
    ))}
  </>
);

MoviesList.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgUrl: PropTypes.string.isRequired,
      imdbUrl: PropTypes.string.isRequired,
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  arr: [],
};
