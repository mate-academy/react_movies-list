import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imdbUrl={movie.imdbUrl}
          imgUrl={movie.imgUrl}
          imdbId={movie.imdbId}
        />
      </li>
    ))}
  </ul>
);
