import React from 'react';

import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {
      movies.map((item: Movie) => (
        <div className="card" key={item.imdbId}>
          <MovieCard movie={item} />
        </div>
      ))
    }
  </div>
);
