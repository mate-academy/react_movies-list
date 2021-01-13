import React from 'react';
import { TypeMovieList } from '../../types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/index';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = TypeMovieList;

MoviesList.defaultProps = {
  movies: [],
};
