import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movie: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movie }) => {
  return (
    <div className="movie">
      {movie.map((film) => (
        <MovieCard movie={film} key={film.imdbId} />
      ))}
    </div>
  );
};
