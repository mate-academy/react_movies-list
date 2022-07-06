import React from 'react';

import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

export interface Movies {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string
}

type Props = {
  movies: Movies[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        title={movie.title}
        description={movie.description}
        imdbUrl={movie.imdbUrl}
        imgUrl={movie.imgUrl}
        imdbId={movie.imdbId}
      />
    ))}
  </div>
);
