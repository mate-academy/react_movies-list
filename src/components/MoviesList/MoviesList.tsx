import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../Types';
import { MovieCard } from '../MovieCard/MovieCard';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
