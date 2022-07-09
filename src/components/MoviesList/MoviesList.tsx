import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC <Props> = ({ movies }) => (
  <div className="movies" data-cy="card">
    {movies.map(movie => (
      <MovieCard
        imgUrl={movie.imgUrl}
        title={movie.title}
        description={movie.description}
        imdbUrl={movie.imdbUrl}
        key={movie.imdbId}
      />
    ))}
  </div>
);
