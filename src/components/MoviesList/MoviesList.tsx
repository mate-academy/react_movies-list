import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/movie';
import { MovieCard } from '../MovieCard';

type Props = {
  moviesList: Movie[]
};

export const MoviesList: React.FC<Props> = ({ moviesList }) => (
  <div className="movies">
    {moviesList.map(item => (
      <MovieCard
        movie={item}
        key={item.imdbId}
      />
    ))}
  </div>
);
