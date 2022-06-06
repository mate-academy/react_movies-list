import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

interface Movie {
  imdbId: string,
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
}

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </div>
);
