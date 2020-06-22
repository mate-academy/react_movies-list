import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ content }) => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {content.map((item, i) => (
          <MovieCard key={item.imdbId} {...item} />
        ))}
      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);

MoviesList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    imdbId: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};
