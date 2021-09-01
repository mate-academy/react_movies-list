import React from 'react';
import { Card } from '../../types/Card';
import { MovieCard } from '../MovieCard/index';
import './MoviesList.scss';

export const MoviesList: React.FC<CardList> = ({ array }) => (
  <div className="movies">
    {array.map(movie => (
      <div key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

interface CardList {
  array: Card[];
}
