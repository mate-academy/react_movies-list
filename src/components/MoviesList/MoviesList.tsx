import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Card } from '../../types/Card';

type Props = {
  movies: Card[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {movies.map(card => (
      <MovieCard
        key={card.imdbId}
        title={card.title}
        description={card.description}
        imgUrl={card.imgUrl}
        imdbUrl={card.imdbUrl}
      />
    ))}
  </>
);
