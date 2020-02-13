import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ moviesList }) => (
  <div className="movies">
    {moviesList.map(({ imdbId, description, imgUrl, imdbUrl, title }) => (
      <MovieCard
        key={imdbId}
        description={description}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
        title={title}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      imgUrl: PropTypes.string,
      imdbUrl: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

MoviesList.defaultProps = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      description: '',
      imgUrl: '',
      imdbUrl: '',
      title: '',
    }),
  ),
};
