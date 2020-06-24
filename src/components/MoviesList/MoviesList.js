import React from 'react';
import { ShapeMoviesList } from '../Shapes';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = props => (
  <div className="movies">
    {props.movies.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />))
    }
  </div>
);

MoviesList.propTypes = ShapeMoviesList.isRequired;
export default MoviesList;
