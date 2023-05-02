import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movies: Movie [];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId} data-cy="Movie">
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);
