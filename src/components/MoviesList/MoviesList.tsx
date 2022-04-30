import React from 'react';
import './MoviesList.scss';
import { Movie } from '../Types';
import { MovieCard } from '../MovieCard';

type Props = {
  list: Movie[];
};

export const MoviesList: React.FC<Props> = ({ list = [] }) => (
  <ul>
    {list.map(movie => (
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
