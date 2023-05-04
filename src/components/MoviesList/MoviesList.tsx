import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

interface ListProps {
  movies: Movie[]
}

export const MoviesList: React.FC<ListProps> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => {
        return <MovieCard movie={movie} key={movie.imdbId} />;
      })}
    </div>
  );
};
