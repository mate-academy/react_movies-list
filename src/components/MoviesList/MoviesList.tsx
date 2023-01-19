import React from 'react';
import { Movie } from '../../types/Movie';
import './MoviesList.scss';
import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

type Props = {
  movie: Movie[];
};

export const MoviesList: React.FC<Props> = () => {
  return (
    <div className="movies">
      {moviesFromServer.map(movie => (
        <MovieCard
          key={movie.imdbId}
          movie={movie}
        />
      ))}
    </div>
  );
};
