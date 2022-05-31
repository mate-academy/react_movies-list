import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard/MovieCard';

interface Card {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type Props = {
  movies: Card[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div
        data-cy="card"
        key={movie.imdbId}
        className="card"
      >
        <MovieCard
          title={movie.title}
          description={movie.description}
          imbdUrl={movie.imdbUrl}
          imgUrl={movie.imgUrl}
        />
      </div>
    ))}
  </>
);
