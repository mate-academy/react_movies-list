import React from 'react';
import { MovieCard } from '../MovieCard';
import { Card } from '../../types/Card';
import './MoviesList.scss';

type Props = {
  cards: Card[];
};

export const MoviesList: React.FC<Props> = ({ cards }) => (
  <ul className="cards">
    {cards.map(card => (
      <MovieCard card={card} key={card.imdbId} />
    ))}
  </ul>
);
