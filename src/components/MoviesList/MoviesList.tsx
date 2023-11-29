import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map((el) => (
        <MovieCard movie={el} key={el.imdbId} />
      ))}
    </div>
  </>
);
