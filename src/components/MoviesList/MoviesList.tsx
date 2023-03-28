import React from 'react';

import { ListProps } from '../../types/Props';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList: React.FC<ListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map((item) => <MovieCard movie={item} />)}
  </div>
);
