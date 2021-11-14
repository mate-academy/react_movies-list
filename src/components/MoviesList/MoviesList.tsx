import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

interface Movies {
  title: string,
  description?: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type Props = {
  moviesArray: Movies[];
};

export const MoviesList: React.FC<Props> = ({ moviesArray }) => (
  <div className="movies">
    {moviesArray.map(movie => (
      <div key={movie.imdbId}>
        <MovieCard mov={movie} />
      </div>
    ))}
  </div>
);
