import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MovieListProps {
  movies: Movie[];
}

export const MoviesList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className='movies'>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}

    </div>
  )
};
