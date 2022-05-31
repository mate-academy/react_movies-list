import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MovieList } from '../../types/movieList';

export const MoviesList: React.FC<MovieList> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieCard
        key={movie.imdbId}
        title={movie.title}
        description={movie.description}
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
        imdbId={movie.imdbId}
      />
    ))}
  </div>
);
