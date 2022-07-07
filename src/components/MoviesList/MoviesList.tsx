import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { Card } from '../../types/Card';
import './MoviesList.scss';

type List = {
  movies: Card[],
};

export const MoviesList: React.FC<List> = ({ movies }) => (
  <>
    {movies.map(({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    }) => {
      return (
        <div
          className="movies"
          key={imdbId}
          data-cy="card"
        >
          <MovieCard
            title={title}
            description={description}
            imgUrl={imgUrl}
            imdbUrl={imdbUrl}
          />
        </div>
      );
    })}
  </>
);
