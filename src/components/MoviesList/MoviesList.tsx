import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../types/types';
import './MoviesList.scss';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map(movie => (
        <li key={movie.imdbId} className="card">
          <MovieCard
            title={movie.title}
            description={movie.description}
            imgUrl={movie.imgUrl}
            imdbUrl={movie.imdbUrl}
          />
        </li>
      ))}
    </ul>
  </>
);
