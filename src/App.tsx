import React from 'react';
import { MovieCard } from './components/MovieCard';
import './MoviesList.scss';
import { Movie } from './types/Movie';


type Props = {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieCard key='imdbId' movie={movie} />
    ))}
  </div>
);
