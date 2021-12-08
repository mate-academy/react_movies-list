import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MovieCardTypes } from '../types/MovieCardTypes';

type Props = {
  movies: MovieCardTypes[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        title={movie.title}
        imgUrl={movie.imgUrl}
        imdbUrl={movie.imdbUrl}
        description={movie.description}
      />
    ))}
  </div>
);
