import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(curentMovie => (
      <div className="card" data-cy="Movie" key={curentMovie.imdbId}>
        <MovieCard {...curentMovie} />
      </div>
    ))}

  </div>
);
