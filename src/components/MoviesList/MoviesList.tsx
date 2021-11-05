import React from 'react';
import './MoviesList.scss';
import { Product } from '../type/Product';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Product[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <div className="card" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
