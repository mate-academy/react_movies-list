import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId} className="card">
        <MovieCard
          {...movie}
        />
      </div>
    ))}
  </div>
);
