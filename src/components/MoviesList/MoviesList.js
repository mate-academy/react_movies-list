import React from 'react';
import './MoviesList.scss';
import PropType from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <>
    <div className="movies">
      { movies.map(movie => (
        <MovieCard key={movies.imdbId} {...movie} />
      )) }
    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropType.arrayOf(PropType.object.isRequired).isRequired,
  imdbId: PropType.string.isRequired,
};
