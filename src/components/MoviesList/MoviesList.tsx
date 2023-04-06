import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(film => (
      <div className="card" key={film.imdbId} data-cy="Movie">
        <MovieCard movie={film} />
      </div>
    ))}
  </div>
);
