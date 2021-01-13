import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="page">
    <div className="page-content">
      <div className="movies">

        {movies.map(item => (
          <MovieCard {...item} key={item.imdbId} />
        ))}

      </div>
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);

const types = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
});

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(types).isRequired,
};
