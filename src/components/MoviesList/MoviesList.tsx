import React from 'react';
import { Movie } from '../../types/Movie';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

type Movies = {
  movies: Movie[];
};
export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  </>
);
