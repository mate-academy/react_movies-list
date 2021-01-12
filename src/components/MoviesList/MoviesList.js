import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { moviesType } from '../type';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        title={movie.title}
        description={movie.description}
        img={movie.imgUrl}
        imdb={movie.imdbUrl}
        key={movie.imdbId}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    moviesType.isRequired,
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
