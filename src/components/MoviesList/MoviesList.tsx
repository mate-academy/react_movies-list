import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface MovieCards {
  title: string;
  description: string;
  imdbUrl: string;
  imgUrl: string;
}

type Props = {
  movies: MovieCards[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul>
    <div className="movies">
      {movies.map(movie => (
        <li key={movie.title}>
          <MovieCard {...movie} />
        </li>
      ))}
    </div>
  </ul>
);
