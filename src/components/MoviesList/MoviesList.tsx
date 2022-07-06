import React from 'react';
import './MoviesList.scss';
import { Movie, MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movies">

      {movies.map(movie => {
        return (
          <MovieCard movie={movie} key={movie.imdbId} />
        );
      })}
    </div>
  );
};
