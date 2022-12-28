import React from 'react';
import './MoviesList.scss';

// import { Props } from '../../types/Movie';
import { Prop } from '../../types/Movie';

import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<Prop> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
