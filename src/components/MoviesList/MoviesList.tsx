import React from 'react';
import { Movie } from '../MovieCard/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="card">
    <ul className="movies">
      {movies.map(movie => (
        <li key={movie.imdbId}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  </div>
);
