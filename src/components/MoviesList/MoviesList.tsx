import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map((element) => (
      <div key={element.imdbId} className="card">
        <MovieCard {...element} />
      </div>
    ))}
  </div>
);
