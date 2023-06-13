import React from 'react';
import { Movie } from '../../types/Movie';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC <Props> = ({ movies }) => (
  <div className="movies">

    {movies.map(movie => (
      <div key={movie.imdbId} className="card" data-cy="Movie">

        <MovieCard movie={movie} />

      </div>
    ))}
  </div>
);
