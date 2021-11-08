import React from 'react';
import './MoviesList.scss';
import { Movie } from '../type/Movie';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[]
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <div className="card" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
