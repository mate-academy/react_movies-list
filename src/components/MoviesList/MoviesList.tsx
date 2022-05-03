import React from 'react';

import './MoviesList.scss';
import { MovieCardItem } from '../MovieCard';
import { MovieCard } from '../types/movieCard';

type Props = {
  movies: MovieCard[]
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li className="card" key={movie.imdbId}>
        <MovieCardItem
          title={movie.title}
          description={movie.description}
          imgUrl={movie.imgUrl}
          imdbUrl={movie.imdbId}
        />
      </li>
    ))}
  </ul>
);
