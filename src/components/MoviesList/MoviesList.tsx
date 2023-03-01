import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

export type Props = {
  movies?: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <article className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </article>
);
