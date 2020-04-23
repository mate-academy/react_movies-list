import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ list }) => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {list.map(item => (
          <MovieCard {...item} key={item.imdbId} />
        ))}
      </div>
    </div>
    <div className="sidebar">Sidebar will be here</div>
  </div>
);

MoviesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
