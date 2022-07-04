import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Card } from '../Types/Card';

export const MoviesList: React.FC<{ list: Card[] }> = ({ list }) => (
  <div className="movies">
    {list.map(card => (
      <MovieCard card={card} />
    ))}
  </div>
);
