import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MovieType } from '../../Types/movieCard';

type Props = {
  films: MovieType[]
};

export const MoviesList: React.FC<Props> = ({ films }) => (
  <div className="movies">
    {films.map(film => (
      <MovieCard film={film} key={film.imdbId} />
    ))}
  </div>
);
