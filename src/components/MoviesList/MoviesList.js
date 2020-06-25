import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { ShapeMoviesList } from '../Shapes';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(item => <MovieCard key={item.imdbId} cardInfo={item} />)}
  </div>
);

MoviesList.propTypes = ShapeMoviesList.isRequired;
