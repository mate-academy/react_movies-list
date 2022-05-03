import React from 'react';
import './MoviesList.scss';
import { Card } from '../../types/Card';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Card[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbUrl}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imdbUrl={movie.imdbUrl}
          imgUrl={movie.imgUrl}
        />
      </li>
    ))}
  </ul>
);
