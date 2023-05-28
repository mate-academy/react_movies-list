import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(film => (
        <MovieCard key={film.imdbId} movie={film} />
      ))}
    </div>
  </>
);
