import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Card } from '../../types/Card';

type Props = {
  movies: Card[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <div className="card" key={movie.imdbId}>
          <MovieCard {...movie} />
        </div>
      ))}
    </div>
  </>
);
