import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Prop = {
  movies: Movie[]
};

export const MoviesList: React.FC<Prop> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
  </div>
);
