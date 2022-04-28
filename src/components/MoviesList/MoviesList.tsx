import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { CardInfo } from '../../types/CardInfo';

type Props = {
  cards: CardInfo[];
};

export const MoviesList: React.FC<Props> = ({ cards = [] }) => (
  <div className="movies">
    {cards.map(card => (
      <div className="card" key={card.imdbId}>
        <MovieCard
          title={card.title}
          imgUrl={card.imgUrl}
          imdbUrl={card.imdbUrl}
          description={card.description}
        />
      </div>
    ))}
  </div>
);
