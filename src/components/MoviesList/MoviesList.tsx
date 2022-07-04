import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

interface Card {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type List = {
  movies: Card[],
};

export const MoviesList: React.FC<List> = ({ movies }) => (
  <div className="movies">
    {movies.map(({
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    }) => {
      return (
        <div
          className="card"
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
  </div>
);
