import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';
import './MoviesList.scss';

type Props = {
  movies: Movie[]
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
