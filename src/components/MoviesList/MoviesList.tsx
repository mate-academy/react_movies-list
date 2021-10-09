import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { Movies } from '../../types/Movies';

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie: Movie) => (
      <div key={movie.id} className="card">
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);
