import React from 'react';
import { Movie } from '../../types/movie';

import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <li key={movie.imdbId}>
          <MovieCard {...movie} />
        </li>
      ))}
    </div>
  </>
);
