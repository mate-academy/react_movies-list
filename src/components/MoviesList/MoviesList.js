import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ moviesData }) => (
  <div className="movies">
    {moviesData.map(element => (
      <div className="card" key={element.imdbId}>
        <MovieCard {...element} />
      </div>
    ))}
  </div>
);

MoviesList.defaultProps = {
  moviesData: [],
};

MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.objecshape({
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};
