import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <>
      {movies.map((movie: Movie) => (
        <div className="movies" key={movie.imdbId}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </>
  );
};
