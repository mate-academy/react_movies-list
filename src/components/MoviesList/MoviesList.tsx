import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { CardList, ICard } from './types';

type Props = {
  cards: CardList
};

export const MoviesList: React.FC<Props> = ({ cards }) => (
  <div className="movies">
    {
      cards.map((card: ICard) => {
        return (
          <MovieCard {...card} key={card.imdbId} />
        );
      })
    }
  </div>
);
