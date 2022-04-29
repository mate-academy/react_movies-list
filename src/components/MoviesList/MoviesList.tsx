import React from 'react';

import './MoviesList.scss';
import { MovieCardItem } from '../MovieCard';

interface MovieCard {
  title: string,
  description?: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type Props = {
  movies: MovieCard[]
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCardItem
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbId}
        />
      </div>
    ))}
  </div>
);
