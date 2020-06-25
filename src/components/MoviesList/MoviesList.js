import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieListShape } from '../Shape';

export const MoviesList = props => (
  <div className="movies">
    {props.movies.map(movie => <MovieCard {...movie} />)}
  </div>
);

MoviesList.propTypes = MovieListShape.isRequired;
