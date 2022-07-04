import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../types/movie';
import './MoviesList.scss';

export type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);
