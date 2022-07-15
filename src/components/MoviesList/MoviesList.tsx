import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/movie';
import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  </>
);
