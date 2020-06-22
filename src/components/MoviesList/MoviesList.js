import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { ShapeMovieCard } from '../Shapes';

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
  content: PropTypes.arrayOf(ShapeMovieCard).isRequired,
};
