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

type Props = {
  listMovies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ listMovies }) => (
  <div className="movies">
    {listMovies.map((movie) => (<MovieCard movie={movie} key={movie.imdbId} />))}
  </div>
);
