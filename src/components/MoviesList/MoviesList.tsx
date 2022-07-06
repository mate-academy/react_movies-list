/* eslint-disable max-len */
import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export interface Movies {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type Props = {
  moviesList: Movies[];
};

export const MoviesList: React.FC<Props> = ({ moviesList = [] }) => (
  <>
    <div className="movies">
      {moviesList.map(movie => (
        <div
          key={movie.imdbId}
          className="card"
          data-cy="card"
        >
          <MovieCard
            title={movie.title}
            description={movie.description}
            imgUrl={movie.imgUrl}
            imdbUrl={movie.imdbUrl}
          />
        </div>
      ))}
    </div>
  </>
);
