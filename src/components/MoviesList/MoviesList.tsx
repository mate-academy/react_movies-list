import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(list => (
        <div className="card" data-cy="Movie" key={list.imdbId}>
          <MovieCard {...list} />
        </div>
      ))}
    </div>
  );
};
