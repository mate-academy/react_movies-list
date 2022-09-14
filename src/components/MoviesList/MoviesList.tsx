import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type MovieType = {
  movies: Movie[];
}

export const MoviesList: React.FC<MovieType> = ({ movies = [] }) => {

  return (
    <>
      <div className="movies">
        {
          movies.map(film => (
            <MovieCard key={film.imdbId} movie={film}/>
          ))}
      </div>
    </>
  );
}
