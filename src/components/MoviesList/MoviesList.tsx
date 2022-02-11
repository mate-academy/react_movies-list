import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';

type Props = {
  cards: Movie[],
};

export const MoviesList: React.FC<Props> = ({ cards }) => (
  <div className="movies">
    {cards.map(card => (
      <MovieCard
        title={card.title}
        description={card.description}
        imgUrl={card.imgUrl}
        imdbUrl={card.imdbUrl}
        key={card.imdbId}
      />
    ))}
  </div>
);
