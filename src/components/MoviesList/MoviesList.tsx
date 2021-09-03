import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/index';
import './MoviesList.scss';

interface Prop {
  movies: Movie[]
}

export const MoviesList: React.FC<Prop> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
