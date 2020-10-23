import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';
import { MoviesListShape } from '../shapes/MoviesListShape';

const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = MoviesListShape;

export default MoviesList;
