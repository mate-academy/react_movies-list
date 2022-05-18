import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from './Movie';
import './MoviesList.scss';

type Props = {
  moviesFrom: Movie[];
};

export const MoviesList: React.FC<Props> = ({ moviesFrom }) => (
  <div className="movies">
    {moviesFrom.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);
