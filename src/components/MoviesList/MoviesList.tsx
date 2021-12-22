import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movies } from '../../type/type';

type Props = {
  movies: Movies[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);
