import React from 'react';
import { MovieCard } from '../MovieCard';
import { Props } from '../../types/Props';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie: Movie) => (
      <div className="card" key={movie.title}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);
