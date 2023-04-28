import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type PropsType = {
  movies: Movie[];
};

export const MoviesList: React.FC<PropsType> = (props: PropsType) => {
  const { movies: moviesFromServer } = props;

  return (
    <>
      {moviesFromServer.map((movie: Movie) => (
        <MovieCard movie={movie} />
      ))}
    </>
  );
};
