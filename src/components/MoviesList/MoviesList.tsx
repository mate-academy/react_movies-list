import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

import { Movie } from '../../types/Movie';

type Movies = {
  movies: Movie[];
};

export const MoviesList: React.FC<Movies> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbUrl}
        />
      </li>
    ))}
  </ul>
);
