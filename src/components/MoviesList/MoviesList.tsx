import React from 'react';
import { Card } from '../../types/Card';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  cardsOfMovies: Card[];
};

export const MoviesList: React.FC<Props> = ({ cardsOfMovies = [] }) => (
  <div className="movies">
    {cardsOfMovies.map(cardItem => (
      <div className="card" key={cardItem.imdbId}>
        <MovieCard {...cardItem} />
      </div>
    ))}
  </div>
);
