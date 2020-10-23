import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MoviesListShape } from '../shapes/MovieListShape';

export const MoviesList = ({ list }) => (
  <>
    <div className="movies">
      {list.map(movie => <MovieCard key={movie.imdbId} {...movie} />)}
    </div>
  </>
);

MoviesList.propTypes = MoviesListShape;
