import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
          description={movie.description}
        />
      </li>
    ))}
  </ul>
);
