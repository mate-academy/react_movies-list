import React from 'react';
import { Card } from '../../types/Card';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

type Props = {
  cardsOfMovies: Card[];
};

export const MoviesList: React.FC<Props> = (props) => {
  const { cardsOfMovies } = props;

  return (
    <div className="movies">
      {cardsOfMovies.map(cardItem => (
        <div className="card" key={cardItem.imdbId}>
          <MovieCard card={cardItem} />
        </div>
      ))}
    </div>
  );
};
