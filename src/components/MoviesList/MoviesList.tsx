import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type MoviesArr = {
  movies: Movie[];
};

export const MoviesList: React.FC<MoviesArr> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        title={movie.title}
        description={movie.description}
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
        imdbId={movie.imdbId}
        key={movie.imdbId}
      />
    ))}
  </div>
);
