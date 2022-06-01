import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Movie } from '../../react-app-env';

type Props = {
  films: Movie[]
};

export const MoviesList: React.FC<Props> = ({ films }) => (
  <div className="movies">
    {films.map((film) => (
      <MovieCard film={film} />
    ))}
  </div>
);
