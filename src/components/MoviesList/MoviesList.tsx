import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

interface MoviesListProps {
  movies: {
    title: string;
    description: string;
    imdbUrl: string;
    imgUrl: string;
    imdbId: string;
  } [];
}

export const MoviesList: React.FC <MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieCard movie={movie} />

    ))}
  </div>
);
