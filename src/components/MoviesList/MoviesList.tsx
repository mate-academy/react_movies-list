import React from 'react';
import { Movie } from '../../types/movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies:Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map((movie:Movie) => (
        <li className="movie__item">
          <MovieCard key={movie.imdbId} movie={movie} />
        </li>
      ))}
    </ul>
  );
};
