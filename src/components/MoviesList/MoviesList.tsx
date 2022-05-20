import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movieList: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movieList = [] }) => (
  <div className="movies">
    {
      movieList.map(movie => (
        <div className="card">
          <MovieCard
            key={movie.imdbId}
            movie={movie}
          />
        </div>
      ))
    }
  </div>
);
