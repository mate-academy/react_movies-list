import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  movies.map(({ title, description, imgUrl, imdbUrl }) => (
    <MovieCard
      title={title}
      description={description}
      imgUrl={imgUrl}
      imdbUrl={imgUrl}
    />
  ))
);

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(MovieCard.PropTypes),
};
