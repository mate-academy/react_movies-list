import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';

type Props = {
  cards: Movie[],
};

export const MoviesList: React.FC<Props> = ({ cards }) => (
  <ul className="movies">
    {cards.map(card => (
      <li key={card.imdbId}>
        <MovieCard
          title={card.title}
          description={card.description}
          imgUrl={card.imgUrl}
          imdbUrl={card.imdbUrl}
        />
      </li>
    ))}
  </ul>
);
