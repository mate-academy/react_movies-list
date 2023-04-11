import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    <ul>
      {movies.map(movie => (
        <li key={movie.title}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  </div>
);
