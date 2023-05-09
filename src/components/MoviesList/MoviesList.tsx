import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type MoviesListProps = {
  movies: Movie[]
};

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movieFromList => (
        <MovieCard key={movieFromList.imdbId} movie={movieFromList} />
      ))}
    </div>
  </>
);
