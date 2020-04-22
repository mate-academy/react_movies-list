import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ data }) => (
  <div className="movies">
    {data.map(movieData => (
      <MovieCard key={movieData.imdbId} info={movieData} />
    ))
    }
  </div>
);

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
  })),
};

MoviesList.defaultProps = {
  data: PropTypes.arrayOf(PropTypes.shape({
    description: '',
  })),
};
