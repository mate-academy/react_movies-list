import React from 'react';
import './MoviesList.scss';
import { ShapeMoviesList } from '../Shapes';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(item => (
      <MovieCard key={item.imdbId} {...item} />
    ))}
  </div>
);

MoviesList.propTypes = ShapeMoviesList.isRequired;

export default MoviesList;
