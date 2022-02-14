import React from 'react';
import './MoviesList.scss';
import { Card } from '../../types/Card';
import { MovieCard } from '../MovieCard';

type Props = {
  cards: Card[];
};

export const MoviesList: React.FC<Props> = ({ cards }) => (
  <ul className="movies">
    {cards.map(card => (
      <li key={card.imdbId}>
        <MovieCard card={card} />
      </li>
    ))}
  </ul>
);
