import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export interface Movie {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}
export type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => (

      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>

    ))}
  </div>
);
