import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props>
= ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map(movie => (
        <li
          key={movie.imdbId}
          className="card"
        >
          <MovieCard
            title={movie.title}
            description={movie.description}
            imgUrl={movie.imgUrl}
            imdbUrl={movie.imdbId}
            imdbId={movie.imdbId}
          />
        </li>
      ))}
    </ul>
  </>
);
