import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ list }) => (
  <>
    {list.map(item => (
      <MovieCard
        title={item.title}
        description={item.description}
        imgUrl={item.imgUrl}
        imdbUrl={item.imdbUrl}
        imdbId={item.imdbId}
      />
    ))}
  </>
);

MoviesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
};

MoviesList.defaultProps = {
  list: [],
};
