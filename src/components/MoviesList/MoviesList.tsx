import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

export type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }: Props) => {
  return (
    <>
      <div className="movies">
        {movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.imdbId} />
        ))}
      </div>
    </>
  );
};
