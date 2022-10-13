import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    {movies.map(movie => (
      <div className="card" data-cy="Movie" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </>
);
