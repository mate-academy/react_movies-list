import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard/index';

export const MoviesList = props => (
  <div className="page">
    <div className="page-content">
      <div className="movies">
        {props.movies.map(movie => (
          <MovieCard
            key={movie.imdbId}
            title={movie.title}
            description={movie.description}
            imgUrl={movie.imgUrl}
            imdbUrl={movie.imdbUrl}
          />
        ))}

      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
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
    }).isRequired,
  ).isRequired,
};
