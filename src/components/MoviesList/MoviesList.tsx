import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movies } from '../types/Movies';
import './MoviesList.scss';

type Props = {
  movies: Movies[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(({
      title, description, imgUrl, imdbUrl, imdbId,
    }) => (
      <MovieCard
        title={title}
        description={description}
        imgUrl={imgUrl}
        imdbUrl={imdbUrl}
        key={imdbId}
      />
    ))}
  </div>
);
