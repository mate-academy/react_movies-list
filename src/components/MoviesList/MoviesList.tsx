import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie'
import { MovieCard } from '../MovieCard/MovieCard'

interface MovieProps {
  moviesFromServer: Movie[];
}

export const MoviesList: React.FC<MovieProps> = ({ moviesFromServer }) => (
  moviesFromServer ? <>
  {moviesFromServer.sort((a, b) => a.title.localeCompare(b.title)).map((movie) =>
      <MovieCard movieFromServer={movie} />
          )
  }
  </> : null
);
